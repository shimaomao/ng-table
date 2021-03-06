import { IComponentOptions, IComponentController } from 'angular';
import { IColumnDef, NgTableParams } from 'ng-table';
import { Person } from '../shared';

export class DeclarativeTableComponent implements IComponentOptions {
    controller = DeclarativeTableController;
    templateUrl = './declarative-table.html';
    bindings = {
        data: '<'
    };
}
class DeclarativeTableController implements IComponentController {
    exportedColumns: IColumnDef[];
    data: Person[];
    tableParams = new NgTableParams<Person>({});
    $onInit(){
        this.tableParams.settings({ dataset: this.data });
    }
}