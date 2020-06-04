import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица">

      <div>
        <button class="button" type="button">
          <i class="material-icons">delete</i>
        </button>

        <button class="button" type="button">
          <i class="material-icons">exit_to_app</i>
        </button>
      </div>
    `;
  }
}
