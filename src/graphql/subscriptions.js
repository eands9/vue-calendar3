/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodoOpen = /* GraphQL */ `
  subscription OnCreateTodoOpen($owner: String) {
    onCreateTodoOpen(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodoOpen = /* GraphQL */ `
  subscription OnUpdateTodoOpen($owner: String) {
    onUpdateTodoOpen(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodoOpen = /* GraphQL */ `
  subscription OnDeleteTodoOpen($owner: String) {
    onDeleteTodoOpen(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
