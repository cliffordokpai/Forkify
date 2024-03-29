import View from './View.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = 'No recipes found for your query! Please make another query';
  _successMsg = 'Yay';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
