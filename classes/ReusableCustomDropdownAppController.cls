public with sharing class ReusableCustomDropdownAppController {

    @AuraEnabled
    public static List<Map<String, String>> getSObjectSelectList() {
        List<Map<String, String>> SobjectList = new List<Map<String, String>>();
        Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        Set<String> sObjectNames = schemaMap.keySet();

        list<sortingWrapper> sortSObjectList = new list<sortingWrapper>();

        if(sObjectNames != null && !sObjectNames.isEmpty()) {
            for(string sobjName : sObjectNames) {
                Map<String, String> sObjMap = new Map<String, String>();
                String objLabel = schemaMap.get(sobjName).getDescribe().getLabel();
                Schema.SObjectType objType = schemaMap.get(sobjName);

                //Exclude all the unwanted Sobjects e.g. CustomSettings, History, Share, Feed, ApexClass, Pages etc..
                if(!objType.getDescribe().isCustomSetting() && !sobjName.endsWithIgnoreCase('__c') && objType.getDescribe().getRecordTypeInfos().size() > 0 && objType.getDescribe().isCreateable() &&
                    !sobjName.containsIgnoreCase('history') && !sobjName.containsIgnoreCase('tag') && !sobjName.containsIgnoreCase('share') && !sobjName.containsIgnoreCase('feed')) {
                    sObjMap.put('label', objLabel);
                    sObjMap.put('value', sobjName);
                    sortSObjectList.add(new sortingWrapper(sObjMap));
                }
                else if(!objType.getDescribe().isCustomSetting() && sobjName.endsWithIgnoreCase('__c')) {
                    sObjMap.put('label', objLabel);
                    sObjMap.put('value', sobjName);
                    sortSObjectList.add(new sortingWrapper(sObjMap));
                }
            }
        }

        sortSObjectList.sort();
        for(sortingWrapper sortObjMap : sortSObjectList) {
            SobjectList.add(sortObjMap.sObjFldsMap);
        }
        return SobjectList;
    }

    public class sortingWrapper implements Comparable {
        public Map<String, String> sObjFldsMap;

        public sortingWrapper(Map<String, String> sObjFldsMap) {
            this.sObjFldsMap = sObjFldsMap;
        }

        public Integer compareTo(Object compareTo) {
            return sObjFldsMap.get('label').compareTo(((sortingWrapper)compareTo).sObjFldsMap.get('label'));
        }
    }
}