import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "@app/core/models";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "producto-filter",
  templateUrl: "producto-filter.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoFilterComponent implements OnInit {
  @Input() filterForm: FormGroup;
  @Input() categorias$: Observable<Categoria[]>;
  constructor() {}

  ngOnInit() {}
}
