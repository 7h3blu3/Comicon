import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HulkDialogComponent } from 'src/app/dialogs/hulk-dialog/hulk-dialog.component';

@Component({
  selector: 'app-comicon',
  templateUrl: './comicon.component.html',
  styleUrls: ['./comicon.component.css']
})
export class ComiconComponent implements OnInit {
  @Output() hulkDialog = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HulkDialogComponent, {
      width: '75%',
      height: '85%',
      panelClass: 'my-class',
      // data: scenario,  
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.adminService.getScenarios();
    })

  }

  showHulkDialog(value:boolean) {
    console.log(console.log("value ", value))
    this.hulkDialog.emit(value);
  }
}