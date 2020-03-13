function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg  navbar-custom \">\n  <a class=\"navbar-brand\"><img src = \"./../../../assets/expensify-icon.jpg\"> Expense Management</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"><i class=\"fa fa-navicon\" style=\"color:#fff; font-size:28px;\"></i></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li>\n        <a class=\"nav-link pointer\"  data-toggle=\"modal\" data-target=\"#exampleModal\" >CreateGroup\n          </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item  my-2 my-lg-0 \">\n        <div class=\"input-group search \">\n          <div class=\"input-group-prepend \">\n            <span class=\"input-group-text\" >\n                <i class=\"fa fa-search icon \" aria-hidden=\"true\"></i>\n              </span>\n          </div>\n          \n          <input class=\" form-control col-10 \" type=\"text\" placeholder=\"Search\" #searchInput\n            (keyup.enter)=\"searchGroup()\">\n          \n            <div class=\"input-group-append\">\n          <span *ngIf=searchValue> <button class=\"clear \" (click)=\"unsearch()\">\n              X\n            </button>\n          </span>\n            </div>\n        </div>\n      </li>\n\n      <li class=\"nav-item \">\n        <a class=\"nav-link pointer \" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n   <div class=\"heading\">\n    <h3>List Of Groups</h3>\n  </div>\n  <div *ngIf=\"groups.length==0\" class=\"note\">\n    <h3 class=\"notedes\">No Groups are there </h3>\n  </div>\n  <div class=\"list-group \">\n    <ng-container *ngIf=!searchValue>\n      <div *ngIf=\"loading\">\n      <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n      </div>\n      <div class=\"row\">\n        \n        <div class=\" col-md-4  col-10 groups\" *ngFor=\"let group of groups\" [@groupList]>\n          <div class=\"card carde \">\n            <div class=\"card-header bg-info text-center\">\n              {{group.groupName}}\n            </div>\n            <div class=\"card-body\">\n              <p class=\"card-text\">This group was created on {{group.groupGenerationTime | date:'short'}} </p>\n              <a [routerLink]=\"['/group',group.groupName]\" class=\"btn btn-outline-secondary\"(click)=\"goToGroup(group.groupName)\">view</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-md-6 col-10 \" *ngFor=\"let fgroup of filteredGroups\" [@groupList]>\n        <div class=\"card carde\">\n          <div class=\"card-header bg-info text-center\">\n            {{fgroup.groupName}}\n          </div>\n          <div class=\"card-body\">\n            <p class=\"card-text\">This group was created on {{fgroup.groupGenerationTime | date:'short'}} </p>\n            <a [routerLink]=\"['/group',fgroup.groupName]\" class=\"btn btn-outline-secondary mx-auto\">view</a>\n           \n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Group</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form #group=\"ngForm\">\n          <div class=\"modal-body\">\n\n            <div class=\"form-group\">\n              <label for=\"groupName\" class=\"col-form-label\">GroupName:</label>\n              <input type=\"text\" class=\"form-control\" #name name = \"group\" ngModel>\n              <div class=\"form-group shadow-textarea\">\n                <label for=\"description\">Desription</label>\n                <textarea class=\"form-control z-depth-1\" #description name = \"des\" ngModel rows=\"3\"\n                  placeholder=\"Write group description here...\"></textarea>\n              </div>\n\n            </div>\n\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createGroup(name.value,description.value,group)\">create\n              group</button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group/group.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group/group.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupGroupGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <h5 class=\"card-header center\" >{{groupName}}</h5>\n        <div class=\"card-body\">\n            <nav class=\"navbar navbar-expand-lg  navbar-light bg-light\">\n\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n                    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item active\">\n                            <button class=\"btn btn-primary button\" routerLink=\"/dashboard\">Dashboard </button>\n\n                        </li>\n                        <li class=\"nav-item\">\n                            <button class=\"btn btn-primary button\" [routerLink]=\"['/search',groupName]\">Add\n                                people</button>\n                        </li>\n                        <li class=\"nav-item\">\n                            <button type=\"button\" class=\"btn btn-primary button\" data-toggle=\"modal\"\n                                data-target=\"#expensecreation\">\n                                Create Expense\n                            </button>\n                        </li>\n                    </ul>\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item active\">\n                            <button type=\"button\" class=\"btn btn-primary button\" data-toggle=\"modal\"\n                                data-target=\"#aboutgroup\">\n                                GroupInfo\n                            </button>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n            <div class=\"row\">\n                <div *ngIf=\"loading\">\n                    <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n                    </div>\n                    <div *ngIf = \"expenses.length==0\" class=\"note\"  >\n                        <h4 class=\"notedes\" >No Expenses are there</h4>\n                    </div>\n                <div class=\"col-md-6 expenses\" [@expenseList] *ngFor=\"let expense of expenses\">\n                    <div class=\"card bg-warning \" >\n                        <div class=\"card text-center\">\n                            <div class=\"card-header bg-info\">\n                                {{expense.expenseName}}\n                            </div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text\">This expense includes the amount {{expense.amount}} paid by\n                                    {{expense.whoPaid?.name}}</p>\n                                <div class=\"dropdown\">\n                                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n                                        id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                        aria-expanded=\"false\">\n                                        Edit Expense\n                                    </button>\n                                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                        <button type=\"button\" class=\"dropdown-item\"\n                                            (click)=\"getExpenseId(expense.expenseId)\" data-toggle=\"modal\"\n                                            data-target=\"#editamount\">Edit Amount</button>\n\n                                        <button type=\"button\" class=\"dropdown-item\"\n                                            (click)=\"filterPayors(expense.expenseId)\" data-toggle=\"modal\"\n                                            data-target=\"#editpayor\">Edit Payor</button>\n\n\n                                        <button type=\"button\" class=\"dropdown-item\"\n                                            (click)=\"getExpensepeopleToRemove(expense.expenseId)\" data-toggle=\"modal\"\n                                            data-target=\"#deletepeople\">Delete People</button>\n\n                                        <button type=\"button\" class=\"dropdown-item\"\n                                            (click)=\"filterPeople(expense.expenseId)\" data-toggle=\"modal\"\n                                            data-target=\"#addpeople\">Add people</button>\n\n                                    </div>\n                                </div>\n                                <a class=\"btn btn-primary button\" (click)=\"delExpense(expense.expenseId)\">Delete</a>\n                                <a type=\"button\" class=\"btn btn-primary button\" data-toggle=\"modal\"\n                                    data-target=\"#expensehistory\"\n                                    (click)=\"getExpenseHistory(expense.expenseId)\">History</a>\n                                <button type=\"button\" class=\"btn btn-primary button\" data-toggle=\"modal\"\n                                    data-target=\"#expenseinfo\" (click)=\"getExpenseById(expense.expenseId)\">\n                                    ExpenseInfo\n                                </button>\n                            </div>\n                            <div class=\"card-footer text-muted bg-info\">\n                                Created on {{expense?.createdOn | date:'short'}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button *ngIf = \"!expenses.length==0\" class =\"btn btn-primary load\"(click)=\"getMoreExpenses()\">Load More Expenses</button>\n        </div>\n    </div>\n\n    <!--modal for edit payor-->\n\n    <div class=\"modal fade\" id=\"editpayor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Edit Payor</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #editpayor=\"ngForm\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\">Payor:</div>\n                            <div class=\"col-sm-6 selection\">\n                                <select id=\"inputState\" class=\"form-control\" name=\"payor\" ngModel>\n                                    <option [ngValue]=\"{id:participant.id,name:participant.name}\"\n                                        *ngFor='let participant of filteredPayors'>\n                                        {{participant.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row modal-footer \">\n                            <div >\n                                <button type=\"submit \" class=\"btn btn-primary button\" data-dismiss=\"modal\" (click)=\"editWhoPaid(editpayor.value,editpayor)\">Edit Payor</button>\n                                <button type=\"button\" class=\"btn btn-secondary button\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--modal for delete people-->\n\n    <div class=\"modal fade\" id=\"deletepeople\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Remove Peole</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #deletePeople=\"ngForm\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\"> Remove People Involved:</div>\n                            <div class=\"col-sm-10\">\n                                <select name=\"people\" ngModel multiple>\n                                    <option *ngFor=\"let rpeople of removingPeople\" [ngValue]=\"{id:rpeople.id,name:rpeople.name}\">\n                                        {{ rpeople.name }}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row modal-footer \">\n                            <div >\n                                <button type=\"submit \" class=\"btn btn-primary button\" data-dismiss=\"modal\" (click)=\"removePeople(deletePeople.value,deletePeople)\">Remove people</button>\n                                <button type=\"button\" class=\"btn btn-secondary button\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- modal for add people-->\n    <div class=\"modal fade\" id=\"addpeople\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Modal title</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #addPeople=\"ngForm\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\"> Add People Involved:</div>\n                            <div class=\"col-sm-10\">\n                                <select name=\"people\" ngModel multiple data-toggle=\"tooltip\" data-placement=\"top\" title=\"Hold ctrl and select the users you want to add\">\n                                    <option *ngFor=\"let people of peopleNotInvolve\"\n                                        [ngValue]=\"{id:people.userId,name:people.userName}\">\n                                        {{ people.userName }}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row modal-footer \">\n                            <div >\n                                <button type=\"submit \" class=\"btn btn-primary button\" data-dismiss=\"modal\" (click)=\"editPeople(addPeople.value,addPeople)\">Add people</button>\n                                <button type=\"button\" class=\"btn btn-secondary button\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                        </div>\n                    </form> \n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- modal for edit amount-->\n    <div class=\"modal fade\" id=\"editamount\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Amount</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <form #editamountForm = \"ngForm\"  >\n                <div class=\"modal-body\">\n                    \n                        <div class=\"form-group\">\n                            <label class=\"col-form-label\">Amount to be edited:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"message-text\"  name=\"editAmount\" [(ngModel)]=\"amountToBeEdit\">\n                        </div>\n                \n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary button\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary button\" data-dismiss=\"modal\" (click)=\"editAmount(editamountForm)\">Edit</button>\n                </div>\n                </form>>\n            </div>\n        </div>\n    </div>\n\n\n\n    <!--modal for expenseInfo-->\n    <div class=\"modal fade\" id=\"expenseinfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header center\">\n                    <h4 class=\"modal-title w-100\">{{expense?.expenseName}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div>\n                        <h6 class=\"display-8\">payor:</h6>\n                        <p class=\"lead\">{{expense?.whoPaid.name}}</p>\n                    </div>\n                    <h4>People Involved In Expense<span\n                            class=\"badge badge-light badge-pill count\">{{expense?.people.length}}</span>:</h4>\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let participant of expense?.people\">\n                        <li>\n                            <div class=\"list-group-item\">\n                                <h6>{{participant.name}}</h6>\n                            </div>\n\n                        </li>\n                    </ul>\n                    <h4>Amount To Be Paid:</h4>\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let participant of expense?.people\">\n                        <li *ngIf=\"!(participant.name === expense.whoPaid?.name)\">\n                            <div class=\"list-group-item\">\n                                <h6>{{participant.name}}:{{(expense.amount)/(expense.people.length) | number:'1.0-2'}}</h6>\n                            </div>\n\n                        </li>\n                    </ul>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <div>\n                        <label>CreationTime Of Expense:</label>\n                        <strong> <em> {{expense?.createdOn | date:'short'}}</em> </strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--modal for expense history-->\n\n    <div class=\"modal fade\" id=\"expensehistory\" tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header center\">\n                    <h4 class=\"modal-title w-100\"> Expense History Of {{expense?.expenseName}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <h4>Expense History:</h4>\n                    <ul class=\"list-group list-group-flush \" *ngFor=\"let history of expenseHistory?.expenseHistory\">\n                        <li *ngIf = \"history.action === 'create'\" >\n                            <div class=\"list-group-item\">\n                               <h5>{{history.userName}} created the expense {{expense.expenseName}} </h5>\n                               <i>{{history.modifiedTime | date:'short'}}</i>\n                            </div>\n\n                        </li>\n                        <li *ngIf=\"history.action === 'edited the amount'\">\n                            <div class=\"list-group-item\">\n                             <h5>{{history.userName}} edited the amount from {{history.oldValue}} to {{history.newValue}}</h5>\n                             <i>{{history.modifiedTime | date:'short'}}</i>\n                            </div>\n                        </li>\n                        <li *ngIf=\"history.action === 'edited the whpoaid'\">\n                            <div class=\"list-group-item\">\n                             <h5>{{history.userName}} edited the payor from {{history.oldValue}} to {{history.newValue}}</h5>\n                             <i>{{history.modifiedTime | date:'short'}}</i>\n                            </div>\n                        </li>\n                        <li *ngIf=\"history.action === 'added people'\">\n                            <div class=\"list-group-item\">\n                             <h5>{{history.userName}} add {{history.newPeople.length}} people</h5>\n                             <ul *ngFor = \"let people of history.newPeople\">\n                              <li>{{people.name}}</li>\n                             </ul>\n                             <i>{{history.modifiedTime | date:'short'}}</i>\n                            </div>\n                        </li>\n                        <li *ngIf=\"history.action === 'deleted people'\">\n                            <div class=\"list-group-item\">\n                             <h5>{{history.userName}} deleted {{history.oldPeople.length}} people</h5>\n                             <ul *ngFor = \"let people of history.oldPeople\">\n                              <li>{{people.name}}</li>\n                             </ul>\n                             <i>{{history.modifiedTime | date:'short'}}</i>\n                            </div>\n                        </li>\n                    </ul>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <!-- Modal for display for group details -->\n    <div class=\"modal fade\" id=\"aboutgroup\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header center\">\n                    <h4 class=\"modal-title w-100\">{{groupName}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"description\">\n                        <h6 class=\"display-8\">Description</h6>\n                        <p class=\"lead\">{{groupDetails?.description}}</p>\n                    </div>\n                    <hr class=\"my-4\">\n                    <h4 class=\"center participants\">participants<span\n                            class=\"badge badge-light badge-pill\">{{groupMembers.length}}</span></h4>\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let participant of groupMembers\">\n                        <li>\n                            <div class=\"list-group-item\">\n                                <h6>{{participant.userName}}</h6>\n                                <i>{{participant.email}}</i>\n                            </div>\n\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"modal-footer\">\n                    <div>\n                        <label>@Creator Of Group:</label>\n                        <strong> <em> {{groupDetails?.createdBy.userName}}</em> </strong>\n                    </div>\n                    <div>\n                        <label>created at:</label>\n                        <strong>{{groupDetails?.groupGenerationTime | date:'medium'}}</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal for expense creation -->\n    <div class=\"modal fade\" id=\"expensecreation\" tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title w-100 center\" id=\"exampleModalScrollableTitle\">Expense Creation</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #expenseForm=\"ngForm\">\n\n                        \n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-2 col-form-label\">Expense:</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"expenseInfo.expenseName\" #ename=\"ngModel\"\n                                    name=\"expenseName\" required  [class.is-invalid]=\"ename.invalid && ename.touched\">\n                                    <small class=\"text-danger\" [class.d-none]=\"ename.valid || ename.untouched\">Expense Name is Required</small>\n\n\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-2 col-form-label\">Amount:</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" required name=\"amount\" #eamount=\"ngModel\" [(ngModel)]=\"expenseInfo.amount\" [class.is-invalid]=\"eamount.invalid && eamount.touched\">\n                                <small class=\"text-danger\" [class.d-none]=\"eamount.valid || eamount.untouched\">Amount feild is Required</small>\n\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\">People Involved:</div>\n                            <div class=\"col-sm-10\">\n                                <select name=\"people\" #epeople = \"ngModel\" [(ngModel)]=\"expenseInfo.people\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Hold ctrl button and select the users you want\" multiple required >\n                                    <option *ngFor=\"let participant of groupMembers\"\n                                        [ngValue]=\"{id:participant.userId,name:participant.userName}\">\n                                        {{ participant.userName }}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\">Payor:</div>\n                            <div class=\"col-sm-6 selection\">\n                                <select id=\"inputState\" class=\"form-control\" name=\"payor\"\n                                    [(ngModel)]=\"expenseInfo.whoPaid\" required #epayor = \"ngModel\" [class.is-invalid]=\"epayor.invalid && epayor.touched\" >\n                                    <option [ngValue]=\"{id:participant.id,name:participant.name}\"\n                                        *ngFor='let participant of expenseInfo.people'>\n                                        {{participant.name}}</option>\n                                </select>\n                                <small class=\"text-danger\" [class.d-none]=\"epayor.valid || epayor.untouched\">choose payor</small>\n\n                            </div>\n                        </div>\n                        <div class=\"form-group row \">\n                            <div class=\"col-sm-10 submission\">\n                                <button type=\"submit \" [disabled]=\"expenseForm.form.invalid\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createExpense(expenseForm)\">Create</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group/search/search.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/search/search.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"card-header header\">\n            Add Participants\n        </div>\n        <div *ngIf=\"loading\">\n            <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n            </div>\n        <div class=\"card-body\">\n            <div class=\"search input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" >\n                        <i class=\"fa fa-search icon \" aria-hidden=\"true\"></i>\n                      </span>\n                  </div>\n            <input type=\"text\" class=\"form-control\" #searchInput placeholder=\"search here..\" (keypress)=\"search($event)\">\n            <span *ngIf=searching> <button class=\"clear\" (click)=\"unsearch()\">clear</button> </span>\n        </div>\n        \n            <div class=\"row cardsbody\" *ngIf=\"!searching\">\n                <div class=\" col-md-3 col-sm-4 col-6 cards\" [@usersList] *ngFor=\"let user of users\">\n                    <div class=\"card icard\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{user.userName}}</h5>\n                            <p>{{user.email}}</p>\n                            <button class=\"btn btn-primary\" (click)=\"add(user.userId)\" [disabled]=\"addDisable(user.userId)\">add</button>\n                         </div>\n                    </div>\n                </div>\n\n            </div>\n\n\n            <div class=\"row cardsbody\" >\n                <div class=\" col-md-3 col-sm-4 col-6 cards\" [@usersList] *ngFor=\"let suser of searchedUsers\">\n                    <div class=\"card icard\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{suser.userName}}</h5>\n                            <button class=\"btn btn-primary\"  (click)=\"add(suser.userId)\" [disabled]=\"addDisable(suser.userId)\" >add</button>\n                         </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div *ngIf = \"!searching\"> \n            <span> <button  class=\"btn btn-primary left \" (click)=\"getPrevPages()\" [disabled]=\"pageValue==0\">prev</button> </span>\n             <span><button  class=\"btn btn-primary right \" (click)=\"getNextPages()\"  [disabled]=\"checkNext()\">next</button></span>\n            </div>\n            <div>\n                \n            </div>\n        </div>\n        <button class=\"btn btn-primary group\" (click)=\"gotoGroup()\" >goback to group</button>\n    </div>\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\" back\">\n  <br>\n  <br><br>\n  <br>\n<div class=\"container bg-light set\">\n  <div class=\"row\">\n    <div class=\" d-none d-sm-block col-sm-6 col-md-6 col-lg-6 col-xl-6 \" >\n      <img src=\"assets/forgot.jpg\">\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 \">\n      <br><br>\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" >\n                      <i class=\"fa fa-key icon\"></i>\n                    </span>\n                </div>\n                <input type=\"text\"  [(ngModel)]=\"rpassword\" class=\"form-control\" placeholder=\"enter recovery password\" required autofocus>\n              </div>\n              </div>\n              <div class=\"col-10\">\n              <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" >\n                        <i class=\"fa fa-key icon\"></i>\n                      </span>\n                  </div>\n                  <input type=\"password\"  [(ngModel)]=\"npassword\" class=\" form-control\" placeholder=\"enter new password \" required>\n                </div>\n                </div>\n                <div class=\"col-10\">\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\" >\n                              <i class=\"fa fa-key icon\"></i>\n                            </span>\n                        </div>\n                        <input type=\"password\"  [(ngModel)]=\"cpassword\" class=\" form-control\" placeholder=\"re-enter password \" required>\n                      </div>\n                      </div>\n            </div>\n            <br>\n            <div class=\"col-xl-12 text-center\">\n                <button type=\"button\" (click)=\"ResetPassword()\" class=\" btn btn-success\">Submit</button>\n              </div>\n           <br>\n          \n    </div>\n  </div>\n   \n       </div>\n</div>\n\n\n\n \n\n      ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">Expense Management</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n      <ul class=\"navbar-nav\">\n  \n        <li class=\"nav-item\">\n  \n          <a class=\"nav-link pointer\" (click)=\"goToSignUp()\">Sign-Up</a>\n  \n        </li>\n  \n      </ul>\n  \n    </div>\n  \n  </nav>\n  \n  <div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block sign\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n      <a class=\"text-muted forgot mr-auto button\" (click)=\"resetPassword()\">forgot password ?</a>\n  \n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">Expense Management</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up</h2>\n\n    <br>\n\n    <form #signupform=\"ngForm\" (ngSubmit)=\"signupform.reset()\">\n\n  \n      <span>FirstName: </span>\n\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n      <input type=\"text\" name=\"fname\" #name=\"ngModel\" class=\"form-control\"\n        [class.is-invalid]=\"name.invalid && name.touched\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required\n        autofocus>\n      <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">First Name is Required</small>\n\n      <br>\n\n      <span>LastName: </span>\n\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n      <input type=\"text\" name=\"inputLastName\" #lname=\"ngModel\" class=\"form-control\"\n        [class.is-invalid]=\"lname.invalid && lname.touched\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n      <small class=\"text-danger\" [class.d-none]=\"lname.valid || lname.untouched\">Last Name is Required</small>\n\n\n      <br>\n\n      <span>Country: </span>\n\n      <label for=\"inputCountry\" class=\"sr-only\">Country: </label>\n      <select [(ngModel)]=\"country\" name=\"country\" class=\"form-control\" #inputCountry=\"ngModel\" (click)=\"onChangeOfCountry()\"\n        required [class.is-invalid]=\"inputCountry.invalid && inputCountry.touched\">\n        <option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</option>\n      </select>\n      <small class=\"text-danger\" [class.d-none]=\"inputCountry.valid || inputCountry.untouched\">choose one country</small>\n\n\n      <br>\n      <span>Mobile: </span>\n\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n\n      <input type=\"tel\" name=\"inputMobile\" #contact=\"ngModel\" pattern=\"^\\d{10}$\" class=\"form-control\"\n        [class.is-invalid]=\"contact.invalid && contact.touched\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n      <small class=\"text-danger\" [class.d-none]=\"contact.valid || contact.untouched\">Mobilenumber is required and it\n        should contain 10 digits</small>\n\n\n      <br>\n\n      <span>Email: </span>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" name=\"inputEmail\" #mail=\"ngModel\" class=\"form-control\" [(ngModel)]=\"email\"\n        [class.is-invalid]=\"mail.invalid && mail.touched\" placeholder=\"Email address\" required>\n      <small class=\"text-danger\" [class.d-none]=\"mail.valid || mail.untouched\">email is Required</small>\n\n\n\n      <br>\n\n      <span>Password: </span>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" name=\"inputPassword\" #pword=\"ngModel\" [class.is-invalid]=\"pword.invalid && pword.touched\"\n        class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n      <small class=\"text-danger\" [class.d-none]=\"pword.valid || pword.untouched\">password is Required</small>\n\n\n      <br>\n\n      <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"signupform.form.invalid\" type=\"submit\" (click)=\"signupFunction()\">Sign Up</button>\n    </form>\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");

    var routes = [{
      path: 'login',
      component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app-service.service.ts":
  /*!****************************************!*\
    !*** ./src/app/app-service.service.ts ***!
    \****************************************/

  /*! exports provided: AppServiceService */

  /***/
  function srcAppAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppServiceService", function () {
      return AppServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);

    var AppServiceService =
    /*#__PURE__*/
    function () {
      function AppServiceService(http) {
        _classCallCheck(this, AppServiceService);

        this.http = http;
        this.url = "/api";
      }

      _createClass(AppServiceService, [{
        key: "signUp",
        value: function signUp(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('email', data.email).set('mobileNumber', data.mobileNumber).set('password', data.password);
          return this.http.post("".concat(this.url, "/signup"), params);
        }
      }, {
        key: "getCountryNames",
        value: function getCountryNames() {
          return this.http.get('../assets/CountryList.json');
        }
      }, {
        key: "getCountryNumbers",
        value: function getCountryNumbers() {
          return this.http.get('../assets/CountryCodes.json');
        }
      }, {
        key: "login",
        value: function login(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', data.email).set('password', data.password);
          return this.http.post(this.url + '/login', params);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          console.log('in app service0', email);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
          return this.http.post(this.url + '/resetpassword', params);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(rpassword, newpassword) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('recoveryPassword', rpassword).set('password', newpassword);
          return this.http.post(this.url + '/updatepassword', params);
        }
      }, {
        key: "groupCreation",
        value: function groupCreation(name, description) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('groupName', name).set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId')).set('description', description).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('userName', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName'));
          return this.http.post(this.url + '/creategroup', params);
        }
      }, {
        key: "getGroupDetails",
        value: function getGroupDetails(groupName) {
          return this.http.get(this.url + '/getgroup/' + groupName);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers(pageValue, limit) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('pageValue', pageValue).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('limit', limit);
          return this.http.post(this.url + '/all', params);
        }
      }, {
        key: "getExpenses",
        value: function getExpenses(pageValue, limit, groupName) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('skip', pageValue).set('limit', limit).set('groupName', groupName).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken'));
          return this.http.post(this.url + '/getexpenses', params);
        }
      }, {
        key: "getExpenseHistory",
        value: function getExpenseHistory(expenseId) {
          return this.http.get(this.url + '/getexpensehistory/' + expenseId);
        }
      }, {
        key: "logout",
        value: function logout() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken'));
          return this.http.post("".concat(this.url, "/out"), params);
        } // end logout function

      }, {
        key: "getUser",
        value: function getUser() {
          var authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken');
          return this.http.get(this.url + '/user/' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId') + '?authToken=' + authToken);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return JSON.parse(localStorage.getItem('userInfo'));
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        }
      }]);

      return AppServiceService;
    }();

    AppServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppServiceService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chat-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _group_group_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./group/group.module */
    "./src/app/group/group.module.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); //import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"], // NgMultiSelectDropDownModule.forRoot(),
      angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_10__["UserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _group_group_module__WEBPACK_IMPORTED_MODULE_9__["GroupModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/group/dashboard/dashboard.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/group/dashboard/dashboard.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html body{\r\n    background-color: blue;\r\n}\r\n.right{\r\n    float:right\r\n}\r\n.navbar-custom {\r\n\r\n    background-color:#66708c !important;\r\n    color:white !important\r\n}\r\nimg{\r\n    height:5%;\r\n    width:5%;\r\n}\r\n.group-list{\r\n    padding:5px;\r\n    margin:10px;\r\n    margin-left: 13%;\r\n    width:75%;\r\n    text-align:center;\r\n    font-size:20px\r\n}\r\n.heading{\r\n    text-align:center;\r\n    text-decoration: underline;\r\n    margin-bottom: 15px; \r\n    text-shadow: 2px 2px 5px #4f9d9e;\r\n}\r\n.note{\r\n    text-align: center;\r\n    \r\n    margin:auto;   \r\n}\r\n.notedes{\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-weight: 700;\r\n  color: burlywood;\r\n  text-align: center;\r\n}\r\n.inline{\r\n    display: inline;\r\n}\r\n.inputfeild{\r\n    height:40px;\r\n}\r\n.clear{\r\n    height:36px; \r\n    margin-right: 30px;\r\n    margin-top: 1px;\r\n    margin-bottom:2px;\r\n   border-top-right-radius: 5px;\r\n   border-bottom-left-radius: 5px;\r\n   background-color: #33FFF6;\r\n}\r\n.search{\r\n    width:90%;\r\n}\r\n.groups{\r\n      \r\n      \r\n      margin:auto;\r\n      margin-bottom: 15px;\r\n  }\r\n.pointer{\r\n      cursor:pointer;\r\n  }\r\n.btn:hover {\r\n    background-color: #182e52;\r\n    color: white;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  \r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DO0FBQ0o7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0FBQ1o7QUFJQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakI7QUFDSjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLFdBQVc7QUFDZjtBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQiw0QkFBNEI7R0FDNUIsOEJBQThCO0dBQzlCLHlCQUF5QjtBQUM1QjtBQUVBO0lBQ0ksU0FBUztBQUNiO0FBRUM7OztNQUdLLFdBQVc7TUFDWCxtQkFBbUI7RUFDdkI7QUFFQTtNQUNJLGNBQWM7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgZmxvYXQ6cmlnaHRcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b20ge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IzY2NzA4YyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudFxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6NSU7XHJcbiAgICB3aWR0aDo1JTtcclxufVxyXG5cclxuXHJcblxyXG4uZ3JvdXAtbGlzdHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MjBweFxyXG59IFxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgXHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggIzRmOWQ5ZTtcclxufVxyXG5cclxuLm5vdGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIG1hcmdpbjphdXRvOyAgIFxyXG59XHJcblxyXG4ubm90ZWRlc3tcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogYnVybHl3b29kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlubGluZXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmlucHV0ZmVpbGR7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG4uY2xlYXJ7XHJcbiAgICBoZWlnaHQ6MzZweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNGRkY2O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4gLmdyb3Vwc3tcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBtYXJnaW46YXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5wb2ludGVye1xyXG4gICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MmU1MjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/group/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/group/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppGroupDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(appService, router, toastr, socketService, spinner) {
        var _this = this;

        _classCallCheck(this, DashboardComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.socketService = socketService;
        this.spinner = spinner;
        this.groups = [];
        this.filteredGroups = [];
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
        this.searchValue = false;
        this.loading = true;

        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === null) {
            _this.router.navigate(['/']);

            return false;
          } else {
            return true;
          }
        }; // end checkStatus


        this.verifyUserConfirmation = function () {
          console.log('verify user confirmation is called');

          _this.socketService.verifyUser(); //  this.disconnectedSocket = false;


          _this.socketService.setuser(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken'));

          ;
        }; //end verifyUserConfirmation


        this.goToGroup = function (name) {
          _this.router.navigate(['/group', name]);
        };

        this.searchGroup = function () {
          _this.searchValue = true;
          _this.filteredGroups = _this.search(_this.searchInput.nativeElement.value);
          console.log(_this.filteredGroups);
        };

        this.unsearch = function () {
          console.log('focusout function is called');
          _this.searchInput.nativeElement.value = '';
          _this.filteredGroups = [];
          _this.searchValue = false;
        };

        this.search = function (data) {
          return _this.groups.filter(function (group) {
            return group.groupName.toLowerCase().includes(data.toLowerCase());
          });
        };

        this.createGroup = function (name, description, form) {
          console.log(name);

          if (name == undefined || name == '') {
            _this.toastr.warning('enter Groupname');
          } else {
            _this.appService.groupCreation(name, description).subscribe(function (data) {
              if (data.status == 200) {
                _this.groups.push(data.data);

                _this.toastr.success(data.message);
              } else {
                _this.toastr.warning(data.message);
              }
            }, function (err) {
              console.log(err.message);

              _this.toastr.error('error occured');
            });

            form.reset();
          }
        };

        this.getUser = function (userId) {
          _this.appService.getUser().subscribe(function (data) {
            if (data.status == 200) {
              _this.loading = false;
              _this.groups = data.data.groupsList;
              console.log(_this.groups);
            } else if (data.status == 300) {
              _this.toastr.error('unauthorized access');

              _this.router.navigate(['/login']);
            } else {
              _this.toastr.error('unauthorized access');
            }
          }, function (error) {
            _this.toastr.error('some error occured');

            console.log(error);
          });
        };

        this.logout = function () {
          _this.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              console.log("logout called");
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('AuthToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('email');

              _this.socketService.exitSocket();

              _this.router.navigate(['/login']);
            } else {
              _this.toastr.error(apiResponse.message);
            } // end condition

          }, function (err) {
            _this.toastr.error('some error occured');
          });
        }; // end logout

      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkStatus();
          this.verifyUserConfirmation();
          this.getUser(this.userId);
          this.spinner.show();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__["SocketserviceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', {
      static: true
    })], DashboardComponent.prototype, "searchInput", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group/dashboard/dashboard.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('groupList', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/group/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/group/group-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/group/group-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: GroupRoutingModule */

  /***/
  function srcAppGroupGroupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupRoutingModule", function () {
      return GroupRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/group/dashboard/dashboard.component.ts");
    /* harmony import */


    var _group_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./group/group.component */
    "./src/app/group/group/group.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/group/search/search.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      pathMatch: 'full'
    }, {
      path: 'group/:groupName',
      component: _group_group_component__WEBPACK_IMPORTED_MODULE_4__["GroupComponent"],
      pathMatch: 'full'
    }, {
      path: 'search/:groupName',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
      pathMatch: 'full'
    }];

    var GroupRoutingModule = function GroupRoutingModule() {
      _classCallCheck(this, GroupRoutingModule);
    };

    GroupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GroupRoutingModule);
    /***/
  },

  /***/
  "./src/app/group/group.module.ts":
  /*!***************************************!*\
    !*** ./src/app/group/group.module.ts ***!
    \***************************************/

  /*! exports provided: GroupModule */

  /***/
  function srcAppGroupGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupModule", function () {
      return GroupModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _group_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./group-routing.module */
    "./src/app/group/group-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/group/dashboard/dashboard.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/group/search/search.component.ts");
    /* harmony import */


    var _group_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./group/group.component */
    "./src/app/group/group/group.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"); //import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


    var GroupModule = function GroupModule() {
      _classCallCheck(this, GroupModule);
    };

    GroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _group_group_component__WEBPACK_IMPORTED_MODULE_6__["GroupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), // NgMultiSelectDropDownModule.forRoot(),
      _group_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupRoutingModule"]],
      exports: [_group_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupRoutingModule"]]
    })], GroupModule);
    /***/
  },

  /***/
  "./src/app/group/group/group.component.css":
  /*!*************************************************!*\
    !*** ./src/app/group/group/group.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupGroupGroupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center{\r\n    text-align: center;\r\n    background-color:#51627d;\r\n    color:white;\r\n    font-size: xx-large;\r\n}\r\n\r\n.participants{\r\n    background-color:#a16789;\r\n    width:80%;\r\n    border-radius:2px;\r\n    margin:auto;\r\n}\r\n\r\n.expenses {\r\n    margin-bottom:1%;\r\n    \r\n}\r\n\r\n.modal-dialog {\r\n    width: 100em;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: auto;\r\n}\r\n\r\n.check{\r\n    margin-left: 22%;\r\n}\r\n\r\n.selection{\r\n    margin-left: 17%;\r\n}\r\n\r\n.submission{\r\n    margin-left:35%;\r\n    display:block;\r\n    padding-top:15%;\r\n    \r\n\r\n}\r\n\r\n.button{\r\n    margin:10px;\r\n}\r\n\r\nbutton:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n  }\r\n\r\n.note{\r\n      display:block;\r\n      margin:auto;\r\n      \r\n  }\r\n\r\n.notedes{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-weight: 700;\r\n    color: burlywood;\r\n  }\r\n\r\n.carde{\r\n    border-radius: 2%;\r\n  }\r\n\r\n.load{\r\n    \r\n    margin-left:auto;\r\n    margin-right: auto;\r\n    margin-bottom: auto;\r\n    margin-top: 3%;\r\n    display:block;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .modal-dialog {\r\n      width: 700px; /* New width for default modal */\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .modal-dialog {\r\n        width: 350px; /* New width for default modal */\r\n      }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .modal-dialog {\r\n        width:950 px; /* New width for default modal */\r\n      }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFHQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlOzs7QUFHbkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDOztBQUVBO01BQ0ksYUFBYTtNQUNiLFdBQVc7O0VBRWY7O0FBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO01BQ0UsWUFBWSxFQUFFLGdDQUFnQztJQUNoRDtBQUNKOztBQUVBLG9FQUFvRTs7QUFDcEU7SUFDSTtRQUNJLFlBQVksRUFBRSxnQ0FBZ0M7TUFDaEQ7QUFDTjs7QUFFQSxtREFBbUQ7O0FBQ25EO0lBQ0k7UUFDSSxZQUFZLEVBQUUsZ0NBQWdDO01BQ2hEO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC9ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzUxNjI3ZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLnBhcnRpY2lwYW50c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ExNjc4OTtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcblxyXG4uZXhwZW5zZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbToxJTtcclxuICAgIFxyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAxMDBlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2hlY2t7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIlO1xyXG59XHJcbi5zZWxlY3Rpb257XHJcbiAgICBtYXJnaW4tbGVmdDogMTclO1xyXG59XHJcbi5zdWJtaXNzaW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmctdG9wOjE1JTtcclxuICAgIFxyXG5cclxufVxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5vdGV7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5ub3RlZGVze1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbiAgfVxyXG5cclxuICAuY2FyZGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICB9XHJcblxyXG4ubG9hZHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgd2lkdGg6IDcwMHB4OyAvKiBOZXcgd2lkdGggZm9yIGRlZmF1bHQgbW9kYWwgKi9cclxuICAgIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDsgLyogTmV3IHdpZHRoIGZvciBkZWZhdWx0IG1vZGFsICovXHJcbiAgICAgIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDo5NTAgcHg7IC8qIE5ldyB3aWR0aCBmb3IgZGVmYXVsdCBtb2RhbCAqL1xyXG4gICAgICB9XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/group/group/group.component.ts":
  /*!************************************************!*\
    !*** ./src/app/group/group/group.component.ts ***!
    \************************************************/

  /*! exports provided: GroupComponent */

  /***/
  function srcAppGroupGroupGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupComponent", function () {
      return GroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); //import { IDropdownSettings } from 'ng-multiselect-dropdown';


    var GroupComponent =
    /*#__PURE__*/
    function () {
      function GroupComponent(route, appService, SocketService, router, toaster, spinner) {
        var _this2 = this;

        _classCallCheck(this, GroupComponent);

        this.route = route;
        this.appService = appService;
        this.SocketService = SocketService;
        this.router = router;
        this.toaster = toaster;
        this.spinner = spinner;
        this.groupName = '';
        this.pageValue = 0;
        this.limit = 4;
        this.loading = true;
        this.groupMembers = [];
        this.checkedUsers = [];
        this.expenses = [];
        this.peopleNotInvolve = [];
        this.filteredPayors = [];
        this.removingPeople = [];
        this.expenseInfo = {
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

        this.getExpenseId = function (expenseId) {
          _this2.expenseId = expenseId;
          console.log('expenseId', _this2.expenseId);
        }; //end getExpenseId


        this.getExpenseById = function (expenseId) {
          _this2.expenseId = expenseId;

          var filterExpense = _this2.expenses.find(function (expense) {
            return expense.expenseId === expenseId;
          });

          _this2.expense = filterExpense;
          console.log('getExpenseById', _this2.expense);
        }; //end getExpenseById


        this.getExpensepeopleToRemove = function (expenseId) {
          _this2.expenseId = expenseId;

          var filterExpense = _this2.expenses.find(function (expense) {
            return expense.expenseId === expenseId;
          });

          _this2.removingPeople = filterExpense.people;
          console.log(filterExpense), console.log(_this2.removingPeople);
        }; // end getExpensepeopleToRemove


        this.filterPayors = function (expenseId) {
          _this2.expenseId = expenseId;

          var filterExpense = _this2.expenses.find(function (expense) {
            return expense.expenseId === expenseId;
          });

          console.log('expense id', _this2.expenseId, expenseId);
          console.log('filtered expense', filterExpense);
          _this2.filteredPayors = filterExpense.people;
        }; //end filterPayors


        this.filterPeople = function (expenseId) {
          _this2.peopleNotInvolve = [];
          _this2.expenseId = expenseId;

          var filterExpense = _this2.expenses.find(function (expense) {
            return expense.expenseId === expenseId;
          });

          console.log('people in group', _this2.groupMembers);
          console.log('expense people before adding people ', filterExpense.people);

          var _loop = function _loop(i) {
            if (filterExpense.people.findIndex(function (peoplei) {
              return peoplei.id === _this2.groupMembers[i].userId;
            }) == -1) {
              _this2.peopleNotInvolve.push(_this2.groupMembers[i]);
            }
          };

          for (var i = 0; i < _this2.groupMembers.length; i++) {
            _loop(i);
          }

          console.log('filtered peoople to show while adding people ', _this2.peopleNotInvolve);
        }; //end filterPeople


        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('AuthToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('AuthToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('AuthToken') === null) {
            _this2.router.navigate(['/']);

            return false;
          } else {
            return true;
          }
        }; // end checkStatus
        // public verifyUserConfirmation: any = () => {
        //  console.log('verify user confirmation is called');
        //   this.SocketService.verifyUser()
        //     .then((data) => {
        //       this.disconnectedSocket = false;
        //       this.SocketService.setuser(Cookie.get('AuthToken'));
        //     });
        // }//end verifyUserConfirmation


        this.getGroupInfo = function (groupName) {
          _this2.appService.getGroupDetails(groupName).subscribe(function (data) {
            _this2.groupDetails = data.data;
            _this2.groupMembers = data.data.groupMembers;
            console.log(_this2.groupDetails);
            console.log(_this2.groupMembers);
            console.log(_this2.groupDetails.groupId);
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end getgroupInfo


        this.createExpense = function (form) {
          if (!_this2.expenseInfo.whoPaid) {
            _this2.toaster.warning('payor should be selected to create expense');
          } else if (!_this2.expenseInfo.people || _this2.expenseInfo.people.length < 2) {
            _this2.toaster.warning('Atleast two people should involved in expense');
          } else {
            _this2.expenseInfo.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId');
            _this2.expenseInfo.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName');
            _this2.expenseInfo.groupId = _this2.groupDetails.groupId;
            _this2.expenseInfo.groupName = _this2.groupDetails.groupName;
            console.log(_this2.expenseInfo);

            _this2.SocketService.addExpense(_this2.expenseInfo);

            _this2.SocketService.expenseResponse().then(function (data) {
              form.reset();

              if (data.status == 200) {
                _this2.expenses.push(data.data);

                console.log(data);

                _this2.toaster.success('expense created successfully');
              } else {
                _this2.toaster.error('failed to create expense');
              }
            });
          }
        }; //end create expense


        this.getExpenses = function () {
          _this2.appService.getExpenses(_this2.pageValue, _this2.limit, _this2.groupName).subscribe(function (data) {
            _this2.loading = false;

            if (data.status == 200) {
              _this2.expenses = data.data.expenses;
              console.log('get expenses is called', _this2.expenses);
            } else if (data.status == 300) {
              _this2.toaster.error('unauthorized access');

              _this2.router.navigate(['/login']);
            } else {
              _this2.toaster.error(data.message);
            }
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end getExpenses


        this.getMoreExpenses = function () {
          _this2.pageValue++;
          _this2.loading = true;

          _this2.appService.getExpenses(_this2.pageValue, _this2.limit, _this2.groupName).subscribe(function (data) {
            _this2.loading = false;

            if (data.status == 200) {
              if (_this2.expenses.length != data.data.expenseCount) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  var _loop2 = function _loop2() {
                    var expense = _step.value;
                    if (_this2.expenses.findIndex(function (e) {
                      return e.expenseId == expense.expenseId;
                    }) == -1) _this2.expenses.push(expense);
                  };

                  for (var _iterator = data.data.expenses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop2();
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              } else {
                _this2.toaster.error(data.message);
              }
            } else {
              if (data.status == 404) {
                _this2.toaster.warning('no expenses found to load');
              }
            }
          }, function (err) {
            _this2.toaster.error('some error occured');
          });
        }; //end getmorexpenses


        this.getExpenseHistory = function (expenseId) {
          _this2.getExpenseById(expenseId);

          _this2.appService.getExpenseHistory(expenseId).subscribe(function (data) {
            if (data.status == 200) {
              _this2.expenseHistory = data.data;
              console.log(_this2.expenseHistory);
            }
          }, function (err) {
            _this2.toaster.error('some error occured');
          });
        }; //end get expenseHistory


        this.editAmount = function (form) {
          if (_this2.amountToBeEdit == '' || _this2.amountToBeEdit == undefined) {
            _this2.toaster.warning('enter the amount to edit');
          } else {
            console.log('form', form);

            _this2.SocketService.editAmount(_this2.expenseId, _this2.amountToBeEdit);

            form.reset();
          }
        }; //end editAmount


        this.delExpense = function (expenseId) {
          console.log(expenseId);

          _this2.SocketService.delExpense(expenseId);
        }; //end delExpense


        this.editPeople = function (formData, form) {
          if (formData.people && formData.people.length != 0) {
            _this2.SocketService.editPeople(_this2.expenseId, formData.people);

            form.reset();
          } else {
            _this2.toaster.warning('include atleast one member');
          }
        }; //end editpeople


        this.removePeople = function (formData, form) {
          console.log('people', formData.people);

          if (formData.people && formData.people.length != 0) {
            var persons = formData.people;
            var users = [];

            for (var i = 0; i < formData.people.length; i++) {
              users.push(formData.people[i].id);
            }

            console.log(users);

            _this2.SocketService.removePeople(_this2.expenseId, formData.people, users);

            form.reset();
          } else {
            _this2.toaster.warning('include atleast one member');
          }
        };

        this.editWhoPaid = function (formData, form) {
          if (formData.payor) {
            _this2.SocketService.editWhoPaid(_this2.expenseId, formData.payor);

            form.reset();
          } else {
            _this2.toaster.warning('select the payor from the list');
          }
        }; //end editWhoPaid


        this.delExpenseResponse = function () {
          _this2.delexp = _this2.SocketService.expenseDelResponse().subscribe(function (data) {
            if (data.status == 200) {
              _this2.toaster.success('expense deleted successfully');

              for (var i = 0; i < _this2.expenses.length; i++) {
                if (_this2.expenses[i].expenseId == data.data.expenseId) {
                  _this2.expenses.splice(i, 1);
                }
              }

              console.log(_this2.expenses);
            } else {
              _this2.toaster.error('failed to delete expense');
            }
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end delExpenseResponse


        this.editAmountResponse = function () {
          _this2.editamount = _this2.SocketService.editAmountResponse().subscribe(function (data) {
            console.log('edit amount response is called', data);

            if (data.status == 200) {
              _this2.toaster.success('expense amount edited successfully');

              for (var i = 0; i < _this2.expenses.length; i++) {
                if (_this2.expenses[i].expenseId == data.data.expenseId) {
                  _this2.expenses[i].amount = data.data.amount;
                }
              }

              console.log(_this2.expenses);
            } else {
              _this2.toaster.error('failed to edit amount in expense');
            }
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end editAmount response


        this.editPeopleResponse = function () {
          _this2.addresponse = _this2.SocketService.editPeopleResponse().subscribe(function (data) {
            console.log('edit people response is called', data);

            if (data.status == 200) {
              _this2.toaster.success('people added successfully');

              for (var i = 0; i < _this2.expenses.length; i++) {
                if (_this2.expenses[i].expenseId == data.data.expenseId) {
                  _this2.expenses[i].people = [];

                  for (var j = 0; j < data.data.people.length; j++) {
                    _this2.expenses[i].people.push(data.data.people[j]);
                  }

                  console.log('people in expense after adding ', _this2.expenses[i]);
                }
              }

              _this2.filterPeople(data.data.expenseId);
            } else {
              _this2.toaster.error('failed to add people to group');
            }
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end edit people response


        this.deletePeopleResponse = function () {
          _this2.delresponse = _this2.SocketService.removePeopleResponse().subscribe(function (data) {
            console.log('remove people response is called', data);

            if (data.status == 200) {
              _this2.toaster.success('people deleted successfully');

              for (var i = 0; i < _this2.expenses.length; i++) {
                if (_this2.expenses[i].expenseId == data.data.expenseId) {
                  _this2.expenses[i].people = [];

                  for (var j = 0; j < data.data.people.length; j++) {
                    _this2.expenses[i].people.push(data.data.people[j]);
                  }

                  console.log('people in expense after adding ', _this2.expenses[i]);
                }
              }

              _this2.getExpensepeopleToRemove(data.data.expenseId);
            } else {
              _this2.toaster.error('failed to delete people from group');
            }
          }, function (err) {
            console.log(err);

            _this2.toaster.error('some error occured');
          });
        }; //end edit people response


        this.editWhoPaidResponse = function () {
          _this2.editpayor = _this2.SocketService.editWhoPaidResponse().subscribe(function (data) {
            console.log('edit who paid is called', data);

            if (data.status == 200) {
              _this2.toaster.success('payor edited successfully');

              var index = _this2.expenses.findIndex(function (expense) {
                return expense.expenseId === data.data.expenseId;
              });

              _this2.expenses[index] = data.data;
              _this2.payor = data.data.whoPaid;
              console.log(data.data);
              console.log('payor', _this2.payor);
              console.log(_this2.expenses[index]);
            } else {
              _this2.toaster.error('failed to update payor');
            }
          }, function (err) {
            _this2.toaster.error('some error occured');
          });
        }; //end edit who paid response

      }

      _createClass(GroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkStatus(); //  this.verifyUserConfirmation();

          this.groupName = this.route.snapshot.paramMap.get('groupName');
          this.getGroupInfo(this.groupName);
          this.getExpenses();
          this.delExpenseResponse();
          this.editAmountResponse();
          this.editPeopleResponse();
          this.editWhoPaidResponse();
          this.deletePeopleResponse();
          this.spinner.show();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.delexp) this.delexp.unsubscribe();
          if (this.delresponse) this.delresponse.unsubscribe();
          if (this.addresponse) this.addresponse.unsubscribe();
          if (this.editpayor) this.editpayor.unsubscribe();
          if (this.editamount) this.editamount.unsubscribe();
        }
      }]);

      return GroupComponent;
    }();

    GroupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__["SocketserviceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }];
    };

    GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group/group.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('expenseList', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group.component.css */
      "./src/app/group/group/group.component.css")).default]
    })], GroupComponent);
    /***/
  },

  /***/
  "./src/app/group/search/search.component.css":
  /*!***************************************************!*\
    !*** ./src/app/group/search/search.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".left{\r\n    float: left;\r\n    margin-left: 25%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.right{\r\n    float:right;\r\n    margin-right: 25%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.cards{\r\n    padding:5px;\r\n    margin:auto;\r\n    \r\n}\r\n\r\n.header{\r\n    text-align: center;\r\n    background-color: #07034f;\r\n    color:white;\r\n    font-weight: 600;\r\n    font-size: xx-large;\r\n}\r\n\r\nbutton:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n  }\r\n\r\n.clear{\r\n    height:36px; \r\n    margin-right: 30px;\r\n    margin-top: 1px;\r\n    margin-bottom:2px;\r\n   border-top-right-radius: 5px;\r\n   border-bottom-left-radius: 5px;\r\n   background-color: #33FFF6;\r\n}\r\n\r\n.search{\r\n    margin:auto;\r\n    width:50%;\r\n    padding-bottom: 2%;\r\n    \r\n}\r\n\r\n.pagination{\r\n    margin-top:2%\r\n}\r\n\r\n.group{\r\n    width:25%;\r\n    display:block;\r\n    margin:auto;\r\n    margin-bottom: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7QUFFRjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQiw0QkFBNEI7R0FDNUIsOEJBQThCO0dBQzlCLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jYXJkc3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzAzNGY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uY2xlYXJ7XHJcbiAgICBoZWlnaHQ6MzZweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNGRkY2O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBcclxufVxyXG5cclxuLnBhZ2luYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOjIlXHJcbn1cclxuXHJcbi5ncm91cHtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/group/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/group/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppGroupSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(AppService, SocketService, route, toastr, spinner, router) {
        var _this3 = this;

        _classCallCheck(this, SearchComponent);

        this.AppService = AppService;
        this.SocketService = SocketService;
        this.route = route;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.users = [];
        this.searchedUsers = [];
        this.groupMembers = [];
        this.loading = true;
        this.searchingValue = '';
        this.pageValue = 0;
        this.limit = 8;
        this.searching = false;

        this.search = function (data) {
          _this3.searching = true;
          _this3.searchingValue = _this3.searchInput.nativeElement.value + data.key;

          _this3.SocketService.searchPeople(_this3.searchingValue);

          _this3.searchResult();
        }; //end search


        this.searchResult = function () {
          _this3.SocketService.searchedResult().then(function (data) {
            _this3.searchedUsers = data;
            console.log(_this3.searchedUsers);
          });
        }; //end searchresult


        this.unsearch = function () {
          _this3.searchInput.nativeElement.value = '';
          _this3.searchedUsers = [];
          _this3.searching = false;
        }; //end unsearch


        this.getUsers = function (pageValue, limit) {
          _this3.AppService.getAllUsers(pageValue, limit).subscribe(function (data) {
            if (data.status == 200) {
              _this3.loading = false;
              _this3.users = data.data.users;
              _this3.Usercount = data.data.userCount;
            } else if (data.status == 300) {
              _this3.toastr.error('unauthorized access');

              _this3.router.navigate(['/login']);
            } else {
              _this3.toastr.error(data.message);
            }
          }, function (err) {
            console.log(err);

            _this3.toastr.error('some error occured');
          });
        }; //end getUsers


        this.getGroupMembers = function (groupName) {
          _this3.AppService.getGroupDetails(groupName).subscribe(function (data) {
            if (data.status == 200) {
              _this3.groupMembers = data.data.groupMembers;
              _this3.groupDetails = data.data;
            }
          }, function (err) {
            console.log(err);

            _this3.toastr.error('some error occured');
          });
        }; //end get group members


        this.add = function (userId) {
          console.log('add function is called', _this3.groupName, userId);

          _this3.SocketService.addPeople(userId, _this3.groupName, _this3.groupDetails.groupId, _this3.groupDetails.groupGenerationTIme);

          _this3.SocketService.addGroupResponse().then(function (data) {
            console.log(data);

            if (data.status == 200) {
              _this3.groupMembers = data.data.groupMembers;

              _this3.toastr.success('user added successfully to group');
            }
          }, function (err) {
            console.log(err);

            _this3.toastr.error('some error occured');
          });
        }; //end add


        this.addDisable = function (userId) {
          if (_this3.groupMembers.some(function (group) {
            return group.userId === userId;
          })) {
            return true;
          } else return false;
        }; //end disable


        this.gotoGroup = function () {
          _this3.router.navigate(['/group', _this3.groupName]);
        };

        this.getNextPages = function () {
          _this3.pageValue++;

          _this3.getUsers(_this3.pageValue, _this3.limit);
        }; //end getnextpages


        this.getPrevPages = function () {
          _this3.pageValue--;

          _this3.getUsers(_this3.pageValue, _this3.limit);
        }; //end getprevpages


        this.checkNext = function () {
          if ((_this3.pageValue + 1) * _this3.limit >= _this3.Usercount) {
            return true;
          } else return false;
        }; //end checknext

      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers(this.pageValue, this.limit);
          this.groupName = this.route.snapshot.paramMap.get('groupName');
          this.getGroupMembers(this.groupName);
          this.spinner.show();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_4__["SocketserviceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', {
      static: true
    })], SearchComponent.prototype, "searchInput", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group/search/search.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('usersList', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/group/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/socketservice.service.ts":
  /*!******************************************!*\
    !*** ./src/app/socketservice.service.ts ***!
    \******************************************/

  /*! exports provided: SocketserviceService */

  /***/
  function srcAppSocketserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketserviceService", function () {
      return SocketserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);

    var SocketserviceService = function SocketserviceService(http) {
      var _this4 = this;

      _classCallCheck(this, SocketserviceService);

      this.http = http; // //events to be listened
      // public verifyUser = () => {
      //   return Observable.create((observer) => {
      //     this.socket.on('verify', function (data) {
      //       observer.next(data);
      //     })
      //   })
      // }//end verify user event 

      this.verifyUser = function () {
        console.log('verify user on is occured');

        _this4.socket.on('verify', function (data) {
          console.log('verify user on is occured inside');
          return data;
        }); // end Socket

      }; //end add group response


      this.getOnlineUsersList = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('online-user-list', function (data) {
            observer.next(data);
          });
        });
      }; // end getonlineuserslist


      this.disconnectedSocket = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on("disconnect", function () {
            observer.next();
          }); // end Socket

        }); // end Observable
      }; // public addGroupi = ()=>{
      //   this.socket.on('add-groupi',(data)=>{
      //     if(data.userId===Cookie.get('userId'))
      //     {
      //       this.socket.emit('add',data.groupName);
      //     }
      //   })
      // }//end addgroupi


      this.addGroupResponse = function () {
        return new Promise(function (resolve, reject) {
          _this4.socket.on('add-group-response', function (data) {
            resolve(data);
          }); // end Socket

        });
      }; //end add group response


      this.searchedResult = function () {
        return new Promise(function (resolve, reject) {
          _this4.socket.on('searched-result', function (data) {
            console.log('socket service', data);
            resolve(data);
          }); // end Socket

        });
      }; //end searched result


      this.getExpenesResponse = function () {
        return new Promise(function (resolve, reject) {
          _this4.socket.on('get-expenses-response', function (data) {
            console.log('socket service', data);
            resolve(data);
          }); // end Socket

        });
      }; //end getExpenesResponse


      this.expenseResponse = function () {
        return new Promise(function (resolve, reject) {
          _this4.socket.on('expense-response', function (data) {
            console.log('socket service', data);
            resolve(data);
          }); // end Socket

        });
      }; //end expenseResponse


      this.expenseDelResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('delexp-ack', function (data) {
            observer.next(data);
          });
        });
      }; //end searched result


      this.editAmountResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('edit-amount-ack', function (data) {
            observer.next(data);
          });
        });
      }; //end edit amount response


      this.removePeopleResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('delete-people-ack', function (data) {
            console.log('delete people response', data);
            observer.next(data);
          });
        });
      }; //end removePeopleResponse


      this.editWhoPaidResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('edit-whopaid-ack', function (data) {
            observer.next(data);
          });
        });
      }; //end edit whopaid response


      this.editPeopleResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('edit-people-ack', function (data) {
            observer.next(data);
          });
        });
      }; //edit people response


      this.errOccured = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this4.socket.on('error-occurred', function (data) {
            observer.next(data);
          });
        });
      }; // end err occured event 
      //events to be emitted


      this.setuser = function (authToken) {
        console.log('set-user event is emitted');

        _this4.socket.emit('set-user', authToken);
      }; //end set user


      this.getExpenses = function (groupName, pageValue, limit) {
        _this4.socket.emit('get-expenses', {
          groupName: groupName,
          skip: pageValue,
          limit: limit
        });
      };

      this.delExpense = function (expenseId) {
        console.log('delExpense socket is emiitted');

        _this4.socket.emit("delete-an-expense", {
          userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
          userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
          expenseId: expenseId
        });
      }; //end delexpense


      this.editAmount = function (expenseId, amount) {
        _this4.socket.emit('edit-amount', {
          userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
          userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
          expenseId: expenseId,
          amount: amount
        });
      }; //end editAmount


      this.editPeople = function (expenseId, people) {
        _this4.socket.emit('edit-people', {
          userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
          userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
          expenseId: expenseId,
          people: people
        });
      }; //end editpeople


      this.editWhoPaid = function (expenseId, whoPaid) {
        _this4.socket.emit('edit-whopaid', {
          userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
          userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
          expenseId: expenseId,
          whoPaid: whoPaid
        });
      }; //end editWhoPaid


      this.removePeople = function (expenseId, people, users) {
        _this4.socket.emit('delete-people', {
          userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
          userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
          expenseId: expenseId,
          people: people,
          users: users
        });
      }; //end removePeople


      this.addPeople = function (userId, groupName, groupId, groupGenerationTime) {
        console.log('add pepople emit function is called');

        _this4.socket.emit('add-group', {
          userId: userId,
          groupName: groupName,
          groupId: groupId,
          groupGenerationTime: groupGenerationTime
        });
      }; //end addpeople 


      this.searchPeople = function (name) {
        _this4.socket.emit('search-user', name);
      }; //end search people


      this.addExpense = function (expenseInfo) {
        console.log('addExpense is called');

        _this4.socket.emit('create-expense', expenseInfo);
      };

      this.exitSocket = function () {
        _this4.socket.disconnect();
      }; // end exit socket


      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://ec2-18-219-5-23.us-east-2.compute.amazonaws.com:3000');
    };

    SocketserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SocketserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketserviceService);
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.email{\r\n    margin-right: auto;\r\n    margin-left:auto;\r\n    margin-top: 5%;\r\n    display:block;\r\n    width:100%;\r\n}\r\n\r\n.reset {\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.buttons{\r\n display:inline;\r\n padding-top: 5%;\r\n}\r\n\r\n.end{\r\n    margin:4px;\r\n}\r\n\r\n.forgot{\r\n    border: 2px solid black;\r\n    border-radius:5px;\r\n   padding-left:5%;\r\n   padding-right:5%;\r\n   padding-top:7%;\r\n   padding-bottom:10%\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0dBQ2xCLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsY0FBYztHQUNkOzs7QUFHSCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZW1haWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnJlc2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuIGRpc3BsYXk6aW5saW5lO1xyXG4gcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4uZW5ke1xyXG4gICAgbWFyZ2luOjRweDtcclxufVxyXG5cclxuLmZvcmdvdHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIHBhZGRpbmctbGVmdDo1JTtcclxuICAgcGFkZGluZy1yaWdodDo1JTtcclxuICAgcGFkZGluZy10b3A6NyU7XHJcbiAgIHBhZGRpbmctYm90dG9tOjEwJVxyXG5cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(AppService, toaster, router) {
        var _this5 = this;

        _classCallCheck(this, ForgotPasswordComponent);

        this.AppService = AppService;
        this.toaster = toaster;
        this.router = router;

        this.ResetPassword = function () {
          if (!_this5.rpassword) {
            _this5.toaster.warning('enter recovery password ');
          } else if (!_this5.npassword) {
            _this5.toaster.warning('enter new password ');
          } else if (!_this5.cpassword) {
            _this5.toaster.warning('re-enter password');
          } else if (!(_this5.npassword === _this5.cpassword)) {
            _this5.toaster.warning('passwords are not being matched');
          } else {
            _this5.AppService.resetPassword(_this5.rpassword, _this5.npassword).subscribe(function (data) {
              if (data.status == 200) {
                _this5.toaster.success('password updated successfully');

                setTimeout(function () {
                  _this5.goToLogIn();
                }, 1500);
              } else {
                _this5.toaster.warning(data.message);
              }
            }, function (err) {
              _this5.toaster.error('some error occured');
            });
          }
        }; //end submit resetPassword

      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLogIn",
        value: function goToLogIn() {
          this.router.navigate(['/login']);
        } //end gotoLogin

      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/user/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/user/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forgot{\r\n    margin-left:32%;\r\n    display:block;\r\n    cursor:pointer;\r\n}\r\n\r\n.pointer {\r\n    cursor:pointer;\r\n}\r\n\r\n.sign{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3R7XHJcbiAgICBtYXJnaW4tbGVmdDozMiU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(appService, route, toaster) {
        var _this6 = this;

        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.route = route;
        this.toaster = toaster;

        this.goToSignUp = function () {
          _this6.route.navigate(['/sign-up']);
        };

        this.resetPassword = function () {
          if (!_this6.email) {
            _this6.toaster.warning('enter email Id');
          } else {
            console.log('email', _this6.email);

            _this6.appService.forgotPassword(_this6.email).subscribe(function (data) {
              console.log(data);

              if (data.status == 200) {
                _this6.toaster.success(data.message);

                setTimeout(function () {
                  _this6.forgotPassword();
                }, 2000);
              } else {
                _this6.toaster.error(data['message']);
              }
            }, function (err) {
              _this6.toaster.error('some error occured');

              console.log(err);
            });
          }
        };

        this.forgotPassword = function () {
          _this6.route.navigate(['/forgotpassword']);
        };

        this.signinFunction = function () {
          var data = {
            email: _this6.email,
            password: _this6.password
          };

          if (_this6.email == '' || _this6.email == undefined) {
            _this6.toaster.warning('enter email address');
          } else if (_this6.password == '' || _this6.password == undefined) {
            _this6.toaster.warning('enter password');
          } else {
            _this6.appService.login(data).subscribe(function (data) {
              console.log(data);

              _this6.appService.setUserInfo(data);

              if (data.status == 200) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('AuthToken', data.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', data.data.userId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', data.data.userName);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('email', data.data.email);

                _this6.route.navigate(['/dashboard']);
              } else {
                _this6.toaster.error(data.message);
              }
            }, function (error) {
              _this6.toaster.error('some error occured');

              console.log(error.message);
            });
          }
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/user/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/user/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(appService, route, toaster) {
        var _this7 = this;

        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.route = route;
        this.toaster = toaster;
        this.countries = [];

        this.getCountries = function () {
          _this7.appService.getCountryNames().subscribe(function (data) {
            _this7.allCountries = data;

            for (var i in data) {
              var singleCountry = {
                name: data[i],
                code: i
              };

              _this7.countries.push(singleCountry);
            }

            _this7.countries = _this7.countries.sort(function (first, second) {
              return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0;
            });
          });
        }; //end get countries


        this.signupFunction = function () {
          var data = {
            firstName: _this7.firstName,
            lastName: _this7.lastName,
            mobileNumber: "".concat(_this7.countryCode).concat(_this7.mobile),
            email: _this7.email,
            password: _this7.password
          };
          console.log(data);

          _this7.appService.signUp(data).subscribe(function (dataa) {
            console.log(dataa);
            if (dataa.status == 200) setTimeout(function () {
              _this7.route.navigate(['/']);
            }, 2000);else _this7.toaster.error(dataa.message);
          }, function (error) {
            _this7.toaster.error('some error occured');

            console.log("some error occured");
          });
        };
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
          this.getCountryCodes();
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.route.navigate(['/']);
        }
      }, {
        key: "getCountryCodes",
        value: function getCountryCodes() {
          var _this8 = this;

          this.appService.getCountryNumbers().subscribe(function (data) {
            _this8.countryCodes = data;
          });
        } //end  getcountryCodes

      }, {
        key: "onChangeOfCountry",
        value: function onChangeOfCountry() {
          this.countryCode = this.countryCodes[this.country];
          this.countryName = this.allCountries[this.country];
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/user/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
      pathMatch: 'full'
    }, {
      path: 'forgotpassword',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
      pathMatch: 'full'
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]],
      exports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\git\ExpenseManagement\chat-app\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map