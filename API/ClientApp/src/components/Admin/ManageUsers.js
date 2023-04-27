import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Form, Col, FormGroup, Label, Input, FormText } from 'reactstrap';
import { deleteUser, getAllUsers, updateUserRole } from '../../utils/UserApi';
import InputAuto from '../../addons/InputAuto';

const roles = ['User', 'Admin'];

export function ManageUsers() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [autoinputData, setAutoinputData] = useState([]);
  const [formData, setFormData] = useState({
    Role: roles[0]
  });

  useEffect(() => {
    getAllUsers().then(users => {
      setUsers(users);
      setAutoinputData(users.map(user => user.login));
    })
  }, [])

  const handleSelected = async (user) => {
    setSelectedUser(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = await updateUserRole(users.filter(user => user.login === selectedUser)[0].id, formData.Role);

    if (success) {
      alert('Роль обновлена');
    } else {
      alert('Неудачно');
    }
  };

  const handleDeleteUser = async (event) => {
    deleteUser(users.filter(user => user.login === selectedUser)[0].id).then(isDeleted => {
      if (isDeleted) {
        alert('Пользователь удалён!');
      } else {
        alert('Не удалось удалить пользователя...');
      }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Role'){
      setFormData({ ...formData, [name]: roles.indexOf(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div>
        <div style={{ textAlign: 'center', paddingTop: '5px' }}><i>Введите логин пользователя.</i></div>
        <InputAuto
          pholder="Login"
          data={autoinputData}
          setData={setAutoinputData}
          onSelected={handleSelected}
        />
        <hr />
      </div>
      {
        selectedUser !== null ? <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
          <FormGroup>
            <Label>
              Логин пользователя
            </Label>
            <Input
              disabled
              type="text"
              value={selectedUser}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">
              Изменить роль
            </Label>
            <Input
              id="role"
              name="Role"
              type="select"
              onChange={handleChange}
            >
              {
                roles.map(x => {
                  return <option key={x}>{x}</option>
                })
              }
            </Input>
          </FormGroup>
          <div style={{ display: 'flex' }}>
            <Button type="submit">
              Отправить
            </Button>
            <Button onClick={handleDeleteUser} color='danger' style={{ marginLeft: 'auto' }}>
              Удалить пользователя
            </Button>
          </div>
        </Form> : <></>
      }
    </div>
  );
}

