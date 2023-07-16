public class getEmployeeDetails {

    public static List<NitishTESTFFP__employee__c> getdetails(){
        String [] Employee_Fields = new String [] {'NitishTESTFFP__employee__c', 'Id','NitishTESTFFP__Phone_number__c','Name'};
          
        Map<String,Schema.SObjectField> employeeMap = Schema.SObjectType.NitishTESTFFP__employee__c.fields.getMap();
        for (String fieldToCheck : Employee_Fields) {
            // Check if the user has create access on the each field
            if (!employeeMap.get(fieldToCheck).getDescribe().isAccessible()) {
                system.debug('Has no Access on WorkOrder Fields');
                return null;
            }
        }
        return [Select Id, NitishTESTFFP__employee__c,NitishTESTFFP__Phone_number__c,Name from NitishTESTFFP__employee__c];
    }
}