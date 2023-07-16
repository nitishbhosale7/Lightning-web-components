import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import ExcelJS from "@salesforce/resourceUrl/ExcelJsMin";
import XLSX from '@salesforce/resourceUrl/XLSXMin';
import xlsx from '@salesforce/resourceUrl/xlsx';
import sheetjs from '@salesforce/resourceUrl/sheetminjs';

export default class FormatingXLSXdemo extends LightningElement {
    connectedCallback() {

        this.initExcelJs();
      }
    
      async initExcelJs() {
        try {
          // Make sure to add the correct path in loadScript
          await loadScript(this,XLSX+'/unpkg/exceljs.min.js');
          //console.log('script loaded succesfully');
          console.log('XLSX',XLSX);
          await loadScript(this,ExcelJS+'/Exceljsmin.js')
          console.log('exceljs',ExcelJS);

          await loadScript(this,xlsx + '/xlsx/xlsx.js');

          await loadScript(this,sheetjs +'/sheetjs-github/xlsx.js');
          console.log('script loaded succesfully');
        } catch(error){
          console.log("error ", error);
        }
      }
    
      handleClick() {
        try {
          console.log("clicked");
          //const workbook = new ExcelJS.createWorkBook();
    //       const workbook1 = new XLSX.default.Workbook();
    //     alert('line 13 sheet craeted');
    
    
    //   const fileName = 'MyData.xlsx';
    //   window.alert(fileName);

            const rows = [
                { name: "George Washington", birthday: "1732-02-22" },
                { name: "John Adams", birthday: "1735-10-19" },
                // ... one row per President
              ];
              const workbook = sheetjs.utlis.json_to_sheet(rows);
            //   console.log(xlsx)
            //   const worksheet = xlsx.utils.json_to_sheet(rows);
            //   const workbook = xlsx.utils.book_new();
            //   xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            //   xlsx.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });

            // /* calculate column width */
            // const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
            // worksheet["!cols"] = [ { wch: max_width } ];
          
            // xlsx.writeFile(workbook, "Sample.xlsx", { compression: true });
        }catch(error) {
          console.log("erro in excel workbook ");
          console.error()
        }
    
      }
}