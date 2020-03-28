import { html, css, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

/**
 * A simple datatable following material design
 * @element wce-datatable
 */
export class WceDatatable extends LitElement {

  static get properties() {
    return {
      /**
       * Table header definition
       * @type {array<object>}
       */
      header: { type: Array }, // [{name, displayName, isNumerical, renderer:Function<?, lit-html template>}]
      /**
       * Table data
       * @type {array<object>}
       */
      data: { type: Array }, // [{h1, h2,...}] where hi are headers' names
    };
  }

  constructor() {
    super();
    /** @type {Array<HeaderItem>} */
    this.header = [];

    /** @type {Array<any>} */
    this.data = null;
  }

  static get styles() {
    return [
      css`
        *,
        *::before,
        *::after {
          padding:0;
          margin: 0;
          box-sizing: border-box;
        }
      `,
      css`
        .container {
          display: grid;
          grid-template-rows: max-content max-content;
        }
        .table {
          width: 100%;
          border: solid 1px rgba(0, 0, 0, 0.08);
          border-collapse: collapse;
          border-radius: var(--radius-1);
        }
        .table__row,
        .table__header {
          transition: all 0.1s;
          border-bottom: solid 1px rgba(0, 0, 0, 0.08);
        }
        .table__row:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        .table__header {
          height: 3.5rem;
        }
        .table__row .table__cell {
          height: 3.25rem;
        }
        .table__cell {
          padding: 0 1rem;
          text-align: left;
        }
        .table__header .table__cell--numeric {
          text-align: right;
        }
        .table__row .table__cell--numeric {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="container">
        <table class="table">
          ${this._renderHeader()} ${this._renderRows()}
        </table>
      </div>
    `;
  }

  _renderHeader() {
    return html`
      <tr class="table__header">
        ${this.header.map(({ name, displayName, isNumeric }) => {
          const classes = {
            table__cell: true,
            'table__cell--numeric': isNumeric,
          };
          return html`
            <th class=${classMap(classes)}>${displayName || name}</th>
          `;
        })}
      </tr>
    `;
  }

  _renderRows() {
    return html`
      ${this.data.map(
        row => html`
          <tr class="table__row">
            ${this._renderRow(row)}
          </tr>
        `,
      )}
    `;
  }

  _renderRow(rowData) {
    return html`
      ${this.header.map(({ name, isNumeric, renderer }) => {
        const classes = {
          table__cell: true,
          'table__cell--numeric': isNumeric,
        };
        const template = renderer ? renderer(rowData, html) : rowData[name];
        return html`
          <td class=${classMap(classes)}>${template}</td>
        `;
      })}
    `;
  }

}

/**
 * @typedef {object} HeaderItem
 * @property {string} name Header name
 * @property {string} displayName Header display name
 * @property {boolean} isNumeric whether or not data is numeric values
 * @property {Function} renderer A function that define column html
 */