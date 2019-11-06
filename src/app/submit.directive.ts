import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
    onkeyup(event: any)
    {
     //   console.log(event.keyCode)

        if (event.keyCode == 13) { // 13 = enter
           // event.stopPropagation();
            return true;
        }
    }
}
