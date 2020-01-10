import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../shared/services/helper.service';

// Service
import { PermissionService } from '../../core/services/permission.service';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit {
  @Input('appIsAuthorized') operationName: string;

  constructor(private permissionService: PermissionService,
              private el: ElementRef,
              private router: ActivatedRoute,
              private helperService: HelperService) { }
  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const pageId = this.router.data['value'];

  }
}
