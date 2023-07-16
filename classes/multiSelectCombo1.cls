public with sharing class multiSelectCombo1 {
    public multiSelectCombo1() {
        
    }

    @AuraEnabled
    public static Map<String,Account> getInitialData(){
        try {
            List<Account> accList = [Select id,name from Account limit 10];
            Map<String,Account> AccMap = new Map<String,Account>();

            for (Account acc : accList) {
                AccMap.put(acc.Name,acc);
            }

            return AccMap;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Map<String,Account> getSearchValues(String searchString){
        try {
            List<Account> accList = [Select id,name from Account Where Name Like :searchString];
            Map<String,Account> AccMap = new Map<String,Account>();

            for (Account acc : accList) {
                AccMap.put(acc.Name,acc);
            }
            return AccMap;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled(cacheable=true)
    public static List < sObject > fetchLookUpValues(String 
     searchKey,String 
    fieldName, String ObjectName,String keyField) {
      List < sObject > returnList = new List < sObject > ();
        String sQuery =  'select '+fieldName+','+keyField+ ' from '
        +ObjectName+' LIMIT 5000' ;
        List < sObject > lstOfRecords = Database.query(sQuery);
        for (sObject obj: lstOfRecords) {
            returnList.add(obj);
        }
        return returnList;
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getPickListValuesIntoList(){
        List<String> pickListValuesList= new List<String>();
         Schema.DescribeFieldResult fieldResult = Account.Industry.getDescribe();
         List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
         Integer i = 0;
         for( Schema.PicklistEntry pickListVal : ple){
             pickListValuesList.add(pickListVal.getLabel());
         }     
         return pickListValuesList;
     }
}