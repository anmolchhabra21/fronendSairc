import { Button } from 'react-bootstrap'

const ConnectButton = (props) => {
  // add connect activity here
  return (
    <div>
      <Button
        variant='outline-primary'
        size={props.size || 'sm'} style={{
			  border: props.border || '1px solid #c14b47',
			  background: props.background || 'white',
			  fontWeight: 'bold',
			  borderRadius: '6px'
        }} className={props.colorClass || 'text-dark'}
      >
        {props.content || 'CONNECT'}
      </Button>
    </div>
  )
}

export default ConnectButton
