import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { gsap } from 'gsap';
import { Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';


interface Food {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgFor, MatSelectModule, MatDatepickerModule, NgIf],
  templateUrl: './search.component.html',
  providers: [provideNativeDateAdapter(), provideNativeDateAdapter(), DatePipe],
  styleUrl: './search.component.css'
})
export class SearchComponent {

  durationInSeconds = 5;

  constructor(public dialog: MatDialog, private datePipe: DatePipe, private _snackBar: MatSnackBar) {}

  selectedDate: Date | null = null; 

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dateFormControl = new FormControl('', [Validators.required]);
  dateFormControl1 = new FormControl('', [Validators.required]);
  initiator = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  pending = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  items: Array<any> = [
    { SrNo: 1, Workflow: 'Workflow A', RefId: 'REF001', Type: 'Type A', Description: 'Description A', Initiator: 'Initiator A', PendingWith: 'Manager', Status: 'Pending', startDate: '10-03-2024', endDate: '13-03-2024' },
    { SrNo: 2, Workflow: 'Workflow B', RefId: 'REF002', Type: 'Type B', Description: 'Description B', Initiator: 'Initiator B', PendingWith: 'Supervisor', Status: 'Approved', startDate: '09-03-2024', endDate: '12-03-2024' },
    { SrNo: 3, Workflow: 'Workflow C', RefId: 'REF003', Type: 'Type C', Description: 'Description C', Initiator: 'Initiator C', PendingWith: 'Team Lead', Status: 'Rejected', startDate: '08-03-2024', endDate: '11-03-2024' },
    { SrNo: 4, Workflow: 'Workflow D', RefId: 'REF004', Type: 'Type D', Description: 'Description D', Initiator: 'Initiator D', PendingWith: 'Director', Status: 'Pending', startDate: '07-03-2024', endDate: '10-03-2024' },
    { SrNo: 5, Workflow: 'Workflow E', RefId: 'REF005', Type: 'Type E', Description: 'Description E', Initiator: 'Initiator E', PendingWith: 'CEO', Status: 'Approved', startDate: '06-03-2024', endDate: '09-03-2024' },
    { SrNo: 6, Workflow: 'Workflow F', RefId: 'REF006', Type: 'Type F', Description: 'Description F', Initiator: 'Initiator F', PendingWith: 'HR', Status: 'Pending', startDate: '05-03-2024', endDate: '08-03-2024' },
    { SrNo: 7, Workflow: 'Workflow G', RefId: 'REF007', Type: 'Type G', Description: 'Description G', Initiator: 'Initiator G', PendingWith: 'Manager', Status: 'Pending', startDate: '04-03-2024', endDate: '07-03-2024' },
    { SrNo: 8, Workflow: 'Workflow H', RefId: 'REF008', Type: 'Type H', Description: 'Description H', Initiator: 'Initiator H', PendingWith: 'Supervisor', Status: 'Approved', startDate: '03-03-2024', endDate: '06-03-2024' },
    { SrNo: 9, Workflow: 'Workflow I', RefId: 'REF009', Type: 'Type I', Description: 'Description I', Initiator: 'Initiator I', PendingWith: 'Team Lead', Status: 'Rejected', startDate: '02-03-2024', endDate: '05-03-2024' },
    { SrNo: 10, Workflow: 'Workflow J', RefId: 'REF010', Type: 'Type J', Description: 'Description J', Initiator: 'Initiator J', PendingWith: 'Director', Status: 'Pending', startDate: '01-03-2024', endDate: '04-03-2024' },
    { SrNo: 11, Workflow: 'Workflow K', RefId: 'REF011', Type: 'Type K', Description: 'Description K', Initiator: 'Initiator K', PendingWith: 'CEO', Status: 'Approved', startDate: '28-02-2024', endDate: '03-03-2024' },
    { SrNo: 12, Workflow: 'Workflow L', RefId: 'REF012', Type: 'Type L', Description: 'Description L', Initiator: 'Initiator L', PendingWith: 'HR', Status: 'Pending', startDate: '27-02-2024', endDate: '02-03-2024' }
  ];
  

displayArray : Array<any> = [
       
]

displayArray2 : Array<any> = [



];

showingInitial : number = 0;
showingLast : number = 0 ;
isZero : boolean = this.displayArray2.length === 0;
message : string = "The search results will appear here.";



selectedValue: string = '';
selectedValue1: string = '';
selectedCar: string = '';
ps : string = '+';
display : boolean = false;

foods: Food[] = [
  {value: 'steak-0', viewValue: 'Type A'},
  {value: 'pizza-1', viewValue: 'Type B'},
  {value: 'tacos-2', viewValue: 'Type C'},
  {value: 'tacos-2', viewValue: 'Type D'},
  {value: 'tacos-2', viewValue: 'Type E'},
  {value: 'tacos-2', viewValue: 'Type F'},
  {value: 'tacos-2', viewValue: 'Type G'},
  {value: 'tacos-2', viewValue: 'Type H'},
  {value: 'tacos-2', viewValue: 'Type I'},
  {value: 'tacos-2', viewValue: 'Type J'},
  {value: 'tacos-2', viewValue: 'Type K'},
  {value: 'tacos-2', viewValue: 'Type L'},
];

status : Array<any> = [
  'Pending',
  'Rejected',
  'Approved',
]

cars: Car[] = [
  {value: 'volvo', viewValue: 'Volvo'},
  {value: 'saab', viewValue: 'Saab'},
  {value: 'mercedes', viewValue: 'Mercedes'},
];

init = "";
des = "";
pen = "";
date1 : any= "";
date2 : any= "";

handleExpand() {

     this.ps = this.ps === '+' ? '-': '+';
     this.display = this.ps === '-';

     if(this.display) {
      gsap.from('#extended', { y: -20 })
     }

}

handleReset() {

  console.log("1 :"+  this.selectedValue);
  console.log("2 :"+ this.selectedValue1);
  console.log("3 :" + this.pen);
  console.log("4 : "+ this.date1);
  console.log("5 :"+ this.date2);
  console.log("6 :"+ this.des);
  console.log("7 :"+ this.init);  
 
  this.selectedValue = "";
  this.selectedValue1 = "";
  this.pen = "";
  this.date1  =  "";
  this.date2 = "";
  this.des = "";
  this.init = "";
  this.displayArray = [];

   
}

handleSearch() {

  if(this.selectedValue === "" && this.selectedValue1 === "" && this.init === "" && this.des === "" && this.pen === "" && this.date1 === "" && this.date2 === "") {
    this.openSnackBar();
  }
  
  this.dateFormatChange();

     this.items.forEach((item) => {
         
         if(item.Type === this.selectedValue) {
          this.displayArray.push(item);
         }
         if(item.Status === this.selectedValue1) {
          this.displayArray.push(item);
         }
         if(item.Initiator === this.init) {
          this.displayArray.push(item);
         }
         if(item.Description === this.des) {
          this.displayArray.push(item);
         }
         if(item.RefId === this.pen) {
          this.displayArray.push(item);
         }
         if(item.startDate === this.date1) {
          this.displayArray.push(item);
         }
         if(item.endDate === this.date2) {
          this.displayArray.push(item);
         }


     })

     this.showingInitial = 0;
  this.showingLast = Math.min(6, this.displayArray.length);

  // Update displayArray2
  this.displayArray2 = this.displayArray.slice(this.showingInitial, this.showingLast);

  if(this.displayArray2.length === 0) {
    this.message = "No such workflow found...🙄"
  }

  setTimeout(() => {
    this.message = "The search results will appear here.";
  }, 3000);

}

handleBack() {

        if(this.displayArray.length <=6) {
          return ;
        }

       if(this.showingInitial != 0) {
        this.showingLast = this.showingInitial;
        this.showingInitial -= 6
        this.displayArray2 = this.displayArray.slice(this.showingInitial, this.showingLast);
       }

}

handleForward() {
  const nextStartIndex = this.showingLast;
  const nextEndIndex = Math.min(this.showingLast + 6, this.displayArray.length);

  if (nextStartIndex < this.displayArray.length) {
    this.showingInitial = nextStartIndex;
    this.showingLast = nextEndIndex;
    this.displayArray2 = this.displayArray.slice(this.showingInitial, this.showingLast);
  }
}

dateFormatChange() {

  console.log(this.date1);
  console.log(this.date2);

  const formattedDate = this.datePipe.transform(this.date1, 'dd-MM-yyyy');
  const formattedDate1 = this.datePipe.transform(this.date2, 'dd-MM-yyyy');

  this.date1 = formattedDate;
  this.date2 = formattedDate1;
  console.log(this.date1);
  console.log(this.date2);
   

}

openSnackBar() {
  this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
    duration: 3000,
  });
}

  animal : string = "";
  name: string = "";

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

   type : string = "";
   refT : string = "";
   initiator : string = "";
   description : string = "";
   pendingWith : string = "";
   remarks : string = "";
   refId : string = "";

  onNoClick(): void {
    this.dialogRef.close();
  }

  addWorlflow() {
  
     

  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styles: `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
