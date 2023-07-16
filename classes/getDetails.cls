public class getDetails {
	@AuraEnabled
    public static List<Account> getAccountByName(string name1){
        list<Account> acclist = [select Id , name from Account where name=:name1 limit 1];
       
        return acclist;
    }
    
    @AuraEnabled
    public static List<Contact> conList(string accid){
        return [select Id,name from contact where  AccountId=:accid limit 1];
    }
}