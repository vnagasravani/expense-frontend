import { Component, OnInit } from '@angular/core';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from 'src/app/app-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SocketserviceService } from 'src/app/socketservice.service';
import { trigger, transition, style, animate } from '@angular/animations';
import {NgForm} from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('expenseList', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class GroupComponent implements OnInit {
  public addresponse:Subscription;
  public editamount:Subscription;
  public editpayor:Subscription;
  public delresponse:Subscription;
  public delexp:Subscription;
  public groupName = '';
  public pageValue = 0;
  public limit = 4;
  public disconnectedSocket: boolean;
  public loading = true;
  public amountToBeEdit : String;
  public groupDetails;
  public groupMembers = [];
  public checkedUsers = [];
  public expenseId;
  public expenses = [];
  public expense;
  public expenseHistory;
  public peopleNotInvolve = [];
  public filteredPayors = [];
  public removingPeople = [];
  public payor:{
    id:String,
    name:String
  };
  public expenseInfo = {
    expenseName: '',
    amount: '',
    whoPaid: {
      id: String,
      name: String
    },
    people: [{
      id: String,
      name: String
    }],
    userId: '',
    userName: '',
    groupId: '',
    groupName: ''
  };


  constructor(private route: ActivatedRoute, private appService: AppServiceService, private SocketService: SocketserviceService, private router: Router, private toaster: ToastrService,private spinner:NgxSpinnerService) { 
    
  }

  ngOnInit() {
    this.checkStatus();

    this.verifyUserConfirmation();
    this.groupName = this.route.snapshot.paramMap.get('groupName');
    this.getGroupInfo(this.groupName);
    this.verifyUserConfirmation();
    this.getExpenses();
    this.delExpenseResponse();
    this.editAmountResponse();
    this.editPeopleResponse();
    this.editWhoPaidResponse();
    this.deletePeopleResponse();
    this.spinner.show();
  }
 ngOnDestroy(){
   if(this.delexp)
   this.delexp.unsubscribe();
   if(this.delresponse)
   this.delresponse.unsubscribe();
   if(this.addresponse)
   this.addresponse.unsubscribe();
   if(this.editpayor)
   this.editpayor.unsubscribe();
   if(this.editamount)
   this.editamount.unsubscribe();
 }


  public getExpenseId = (expenseId) => {
    this.expenseId = expenseId;
    console.log('expenseId', this.expenseId);
  }//end getExpenseId

  public getExpenseById = (expenseId) => {
    this.expenseId = expenseId;
    let filterExpense = this.expenses.find(expense => expense.expenseId === expenseId);
    this.expense = filterExpense;
    console.log('getExpenseById', this.expense);

  }//end getExpenseById

  public getExpensepeopleToRemove = (expenseId) => {
    this.expenseId = expenseId;
    let filterExpense = this.expenses.find(expense => expense.expenseId === expenseId );
    this.removingPeople = filterExpense.people;
    console.log(filterExpense),
      console.log(this.removingPeople);

  } // end getExpensepeopleToRemove

  public filterPayors = (expenseId) => {
    this.expenseId = expenseId;
    let filterExpense = this.expenses.find(expense => expense.expenseId === expenseId);
    console.log('expense id', this.expenseId, expenseId)
    console.log('filtered expense', filterExpense);
    this.filteredPayors = filterExpense.people;

  } //end filterPayors

  public filterPeople = (expenseId) => {
    this.peopleNotInvolve = [];
    this.expenseId = expenseId;
    let filterExpense = this.expenses.find(expense => expense.expenseId === expenseId);
    console.log('people in group', this.groupMembers);
    console.log('expense people before adding people ', filterExpense.people)
    for (let i = 0; i < this.groupMembers.length; i++) {
      if (filterExpense.people.findIndex(peoplei => peoplei.id === this.groupMembers[i].userId) == -1) {
        this.peopleNotInvolve.push(this.groupMembers[i]);
      }
    }
    console.log('filtered peoople to show while adding people ', this.peopleNotInvolve);
  }//end filterPeople


  public checkStatus: any = () => {

    if (Cookie.get('AuthToken') === undefined || Cookie.get('AuthToken') === '' || Cookie.get('AuthToken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus




  public verifyUserConfirmation: any = () => {
    console.log('verify user confirmation is called');
     this.SocketService.verifyUser().subscribe(data=>{
      this.SocketService.setuser(Cookie.get('AuthToken'));
     });
   }//end verifyUserConfirmation

  public getGroupInfo = (groupName) => {
    this.appService.getGroupDetails(groupName).subscribe(
      (data) => {
        this.groupDetails = data.data;
        this.groupMembers = data.data.groupMembers;
        console.log(this.groupDetails);
        console.log(this.groupMembers);
        console.log(this.groupDetails.groupId)
      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured');
      }
    )
  }//end getgroupInfo

  public createExpense = (form: NgForm) => {
    if (!this.expenseInfo.whoPaid) {
      this.toaster.warning('payor should be selected to create expense');
    }
    else if (!this.expenseInfo.people || this.expenseInfo.people.length < 2) {
      this.toaster.warning('Atleast two people should involved in expense');
    }
    else {
      this.expenseInfo.userId = Cookie.get('userId');
      this.expenseInfo.userName = Cookie.get('userName');
      this.expenseInfo.groupId = this.groupDetails.groupId;
      this.expenseInfo.groupName = this.groupDetails.groupName;
      console.log(this.expenseInfo);
      
      this.SocketService.addExpense(this.expenseInfo);
      this.SocketService.expenseResponse().then((data) => {
        form.reset();
        if (data.status == 200) {
          this.expenses.push(data.data);
          console.log(data);
          this.toaster.success('expense created successfully');


        }
        else {
          this.toaster.error('failed to create expense');
        }


      });
    }
  }//end create expense

  public getExpenses = () => {
    this.appService.getExpenses(this.pageValue, this.limit, this.groupName).subscribe(
      (data) => {
       
        this.loading = false;
        if (data.status == 200) {
          this.expenses = data.data.expenses;
          console.log('get expenses is called', this.expenses);
        }
        else if(data.status==300){
          this.toaster.error('unauthorized access');
          this.router.navigate(['/login']);
        }
        else
        {
          this.toaster.error(data.message);
        }
      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured')
      })
  }//end getExpenses

  public getMoreExpenses = () => {
    this.pageValue++;
    this.loading = true;
    this.appService.getExpenses(this.pageValue, this.limit, this.groupName).subscribe(
      (data) => {
        this.loading = false;
        if (data.status == 200) {
          if(this.expenses.length != data.data.expenseCount)
          for (let expense of data.data.expenses) {
            if(this.expenses.findIndex(e => e.expenseId == expense.expenseId) == -1)
            this.expenses.push(expense);
          }
          else
        {
          this.toaster.error(data.message);
        }
          
        }
        else {
          if (data.status == 404) {
            this.toaster.warning('no expenses found to load');
          }
        }
      },
      (err)=>{
        this.toaster.error('some error occured');
      }
    )
  }//end getmorexpenses

  public getExpenseHistory = (expenseId) => {
    this.getExpenseById(expenseId);
    this.appService.getExpenseHistory(expenseId).subscribe(
      (data) => {
        if (data.status == 200) {
          this.expenseHistory = data.data
          console.log(this.expenseHistory);
        }
      },
      (err)=>{
        this.toaster.error('some error occured');
      }
    )
  }//end get expenseHistory

  public editAmount = (form: NgForm) => {
    
    if (this.amountToBeEdit == '' || this.amountToBeEdit== undefined) {
      this.toaster.warning('enter the amount to edit');
    }
    else {
      
      console.log('form',form);
      this.SocketService.editAmount(this.expenseId, this.amountToBeEdit);
      form.reset();
    }
  }//end editAmount

  public delExpense = (expenseId) => {
    console.log(expenseId);
    this.SocketService.delExpense(expenseId);
  }//end delExpense

  public editPeople = (formData,form:NgForm) => {
    if (formData.people && formData.people.length != 0) {
      this.SocketService.editPeople(this.expenseId, formData.people);
      form.reset();
    }
    else {
      this.toaster.warning('include atleast one member');
    }
  }//end editpeople

  public removePeople = (formData,form:NgForm) => {
    console.log('people',formData.people);
    if (formData.people && formData.people.length != 0) {
      let persons = formData.people;
      let users = [];
      for (let i = 0; i < formData.people.length; i++) {
        users.push(formData.people[i].id);
      }
      console.log(users);
     
      this.SocketService.removePeople(this.expenseId, formData.people, users) 
        
      form.reset();
    }
    else {
      this.toaster.warning('include atleast one member');
    }
  }

  public editWhoPaid = (formData,form:NgForm) => {
    if (formData.payor) {
      this.SocketService.editWhoPaid(this.expenseId, formData.payor);
      form.reset();
    }
    else {
      this.toaster.warning('select the payor from the list');
    }
  }//end editWhoPaid

  public delExpenseResponse = () => {
  this.delexp =  this.SocketService.expenseDelResponse().subscribe(
      (data) => {
        if (data.status == 200) {
          this.toaster.success('expense deleted successfully');
          for (let i = 0; i < this.expenses.length; i++) {
            if (this.expenses[i].expenseId == data.data.expenseId) {
              this.expenses.splice(i, 1);
            }
          }
          console.log(this.expenses);
        }
        else {
          this.toaster.error('failed to delete expense');
        }
      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured');
      })
  }//end delExpenseResponse

  public editAmountResponse = () => {
   this.editamount = this.SocketService.editAmountResponse().subscribe(
      (data) => {
        console.log('edit amount response is called', data);
        if (data.status == 200) {
          this.toaster.success('expense amount edited successfully');
          for (let i = 0; i < this.expenses.length; i++) {
            if (this.expenses[i].expenseId == data.data.expenseId) {
              this.expenses[i].amount = data.data.amount
            }
          }
          console.log(this.expenses);
        }
        else {
          this.toaster.error('failed to edit amount in expense');
        }

      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured');

      }
    )
  }//end editAmount response

  public editPeopleResponse = () => {
    this.addresponse = this.SocketService.editPeopleResponse().subscribe(
      (data) => {
        console.log('edit people response is called', data);
        if (data.status == 200) {
          this.toaster.success('people added successfully');
          for (let i = 0; i < this.expenses.length; i++) {
            if (this.expenses[i].expenseId == data.data.expenseId) {
              this.expenses[i].people = [];
              for (let j = 0; j < data.data.people.length; j++)
                this.expenses[i].people.push(data.data.people[j]);
              console.log('people in expense after adding ', this.expenses[i]);

            }

          }
          this.filterPeople(data.data.expenseId);

        }
        else {
          this.toaster.error('failed to add people to group');
        }
      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured');

      }
    )
  }//end edit people response

  public deletePeopleResponse = () => {
   this.delresponse =  this.SocketService.removePeopleResponse().subscribe(
      (data) => {
        console.log('remove people response is called', data);
        if (data.status == 200) {
          this.toaster.success('people deleted successfully');
          for (let i = 0; i < this.expenses.length; i++) {
            if (this.expenses[i].expenseId == data.data.expenseId) {
              this.expenses[i].people = [];
              for (let j = 0; j < data.data.people.length; j++)
                this.expenses[i].people.push(data.data.people[j]);
              console.log('people in expense after adding ', this.expenses[i]);

            }

          }
          this.getExpensepeopleToRemove(data.data.expenseId);

        }
        else {
          this.toaster.error('failed to delete people from group');
        }
      },
      (err) => {
        console.log(err);
        this.toaster.error('some error occured');

      }
    )
  }//end edit people response


  public editWhoPaidResponse = () => {
   this.editpayor = this.SocketService.editWhoPaidResponse().subscribe(
      (data) => {
        console.log('edit who paid is called', data);
        if (data.status == 200) {
          this.toaster.success('payor edited successfully');
          let index = this.expenses.findIndex(expense => expense.expenseId === data.data.expenseId);
          this.expenses[index] = data.data;
          this.payor = data.data.whoPaid;
          console.log(data.data);
          console.log('payor',this.payor);
          console.log(this.expenses[index]);

        }
        else {
          this.toaster.error('failed to update payor');
        }
      },
      (err)=>{
        this.toaster.error('some error occured');

      }
    )
  }//end edit who paid response


}
