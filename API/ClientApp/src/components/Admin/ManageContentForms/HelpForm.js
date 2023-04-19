import React from 'react';
import { Form, Col, FormGroup, Label, Input } from 'reactstrap';

export function HelpForm() {
  return (
    <Form>
      <FormGroup row>
        <Label
          for="exampleEmail"
          sm={2}
        >
          Усправление контентом
        </Label>
        <Col sm={10}>
          <Input
            placeholder="АКУЛА ГРЕНЛАНДСКАЯ ПОЛЯРНАЯ"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleEmail"
          sm={2}
        >
          Краткое название
        </Label>
        <Col sm={10}>
          <Input
            placeholder="Акула Г П"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleText"
          sm={2}
        >
          Описание
        </Label>
        <Col sm={10}>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleFile"
          sm={2}
        >
          Фото
        </Label>
        <Col sm={10}>
          <Input
            id="exampleFile"
            name="file"
            type="file"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleЕуче"
          sm={2}
        >
          Наживки
        </Label>
        <Col sm={10}>
          <Input
            className="mb-3"
            type="select"
            multiple
          >
            <option>
              Муха
            </option>
            <option>
              Сосиска
            </option>
          </Input>
        </Col>
      </FormGroup>
    </Form>
  );
}