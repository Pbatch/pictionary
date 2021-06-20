import gql from 'graphql-tag';

export const OnCreateMessage = gql`
  subscription {
    onCreateMessage {
      id 
      roomName
      round
      url
      username
    }
  }
`

export const OnCreateRoom = gql`
subscription {
  onCreateRoom {
    roomName
  }
}
`

export const OnDeleteRoom = gql`
subscription {
  onDeleteRoom {
    roomName
  }
}
`