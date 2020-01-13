import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-course-activities',
  templateUrl: './teacher-course-activities.component.html',
  styleUrls: ['./teacher-course-activities.component.css']
})
export class TeacherCourseActivitiesComponent implements OnInit {


  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navLinks = [

      {
        label: 'Assignments',
        link: 'assignments',
        index: 0
      }, {
        label: 'Quizzes',
        link: 'quizzes',
        index: 1
      }, {
        label: 'Projects',
        link: 'projects',
        index: 2
      },
      {
        label: 'Exams',
        link: 'exams',
        index: 3
      }
    ];

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
    });
  }
}




//   onNavigateTo(route: string) {
//     this.router.navigate([route], { relativeTo: this.activatedRoute });
//   }
//
//
//   private getTabHeaderItems(): TabHeaderItem[] {
//     return [
//       {
//         baseRoute: 'profile',
//         label: 'profile'
//       },
//       {
//         baseRoute: 'bank',
//         label: 'bank'
//       },
//       {
//         baseRoute: 'info',
//         label: 'optional-information'
//       },
//       {
//         baseRoute: 'comments',
//         label: 'comments'
//       }
//     ];
//   }
//
//   ngOnInit() {
//     this.items = this.getTabHeaderItems();
//     this.route = this.router.url.split('/').slice(4);
//     this.router.events
//       .pipe(takeUntil(this.ngUnsubscribe))
//       .subscribe((event: Event) => {
//         if (event instanceof NavigationEnd) {
//           this.route = event.url.split('/').slice(4);
//         }
//       });
//   }
//
// <aid-tabs-header
//   [items]="items"
//     [route]="route"
//   (navigateTo)="onNavigateTo($event)"
//     >
//     </aid-tabs-header>
//
// }
//
// OnInit, AfterViewInit {
// @Input() items: TabHeaderItem[];
// @Input() route: string[];
// @Output() navigateTo: EventEmitter<string> = new EventEmitter();
//
// @ViewChild(MatTabGroup, { static: true }) tabGroup: MatTabGroup;
//
//   constructor() {}
//
//   ngOnInit() {}
//
//   ngAfterViewInit(): void {
//     this.tabGroup._tabs.forEach((item: MatTab, index: number) => {
//       const tabRoute: string[] = item.ariaLabel.split('/');
//
//       if (this.routesMatch(tabRoute)) {
//         this.tabGroup.selectedIndex = index;
//       }
//     });
// }
//
//   routesMatch(tabRoute: string[]) {
//     for (let i = 0; i < tabRoute.length; i++) {
//       if (tabRoute[i] !== this.route[i]) {
//         return false;
//       }
//     }
//
//     return true;
//   }
//
//   onSelect() {
//     this.navigateTo.emit(
//       this.tabGroup._tabs.toArray()[this.tabGroup.selectedIndex].ariaLabel
//     );
//   }


