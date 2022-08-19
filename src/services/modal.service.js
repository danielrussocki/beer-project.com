export class AppModalService {
  constructor ({ AppModal }) {
    this._appModal = AppModal
  }

  /* set de toda la info */
  setAppModalInfo = ({ showModal = true, newTitle, newText, titleComponent, bodyComponent, bodyData }) => {
    this._appModal.show = showModal
    this._appModal.title = newTitle
    this._appModal.text = newText
    this._appModal.titleComponent = titleComponent
    this._appModal.bodyComponent = bodyComponent
    this._appModal.bodyData = bodyData
  }

  /* set de la info de manera separada */
  setAppModalShow = ({ showModal }) => {
    this._appModal.show = showModal
  }

  setAppModalTitle = ({ newTitle }) => {
    this._appModal.title = newTitle
  }

  setAppModalText = ({ newText }) => {
    this._appModal.text = newText
  }

  setAppModalBodyComponent = ({ bodyComponent }) => {
    this._appModal.bodyComponent = bodyComponent
  }

  setAppModalTitleComponent = ({ titleComponent }) => {
    this._appModal.titleComponent = titleComponent
  }

  setAppModalBodyData =({ bodyData }) => {
    this._appModal.bodyData = bodyData
  }
}
