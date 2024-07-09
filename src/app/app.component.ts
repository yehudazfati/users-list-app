import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {findPassingCardFromEastToWest, solutionDispensser2} from "./qa-interviews";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'users-list-app';
  protected readonly findPassingCardFromEastToWest = findPassingCardFromEastToWest;
  protected readonly solutionDispensser2 = solutionDispensser2;
}
