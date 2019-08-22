import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { EntryService } from './../shared/entry.service';
import { Entry } from './../shared/entry.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

   constructor(protected entryService: EntryService) {
     super(entryService);
   }

}
