@isTest
public class getEmployeeDetailsTest {

    public static testmethod void validateOne(){
        NitishTESTFFP__employee__c ee = new NitishTESTFFP__employee__c();
        ee.Name='Test 1';
        ee.NitishTESTFFP__Phone_number__c='7382914';
        ee.NitishTESTFFP__employee__c= 'Gali no. 420';
        insert ee;
        
        Test.startTest();
        List<NitishTESTFFP__employee__c> employeeList = getEmployeeDetails.getdetails();
        Test.stopTest();
    }
}