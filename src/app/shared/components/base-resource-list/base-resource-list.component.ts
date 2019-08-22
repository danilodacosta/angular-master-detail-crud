import { OnInit } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  public resources: T[];

  constructor(protected baseResourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.baseResourceService.getAll().subscribe(
      (resources => this.resources = resources),
      (error: any) => alert('Error ao carregar listagem'));
    }

    deleteResource(resource: T) {

      const mustDelete = confirm('Deseja realmente excluir esse item ?');

      if (mustDelete) {
      this.baseResourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element !== resource),
        () => alert('Erro ao tentar excluir !')
      );
    }
  }
}
