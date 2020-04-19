import React, {Component} from 'react';

class MessageBox extends Component {
  render() {
        return (
          <form>
            <h3>Новый контакт</h3>
            <input
                type="text"
                name="soname"
                className="input"
                placeholder="Фамилия" />

          <input
                type="text"
                name="name"
                className="input"
                placeholder="Имя" />

          <input
                type="text"
                name="patronymic"
                className="input"
                placeholder="Отчество" />
          <input
                type="number"
                name="phone"
                className="input"
                placeholder="Номер телефона" />
                <button onclick="" id="addButton">Добавить контакт</button>




               
          </form>
          
        )
  }
}


  
export default MessageBox