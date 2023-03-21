import { useState, useContext } from "react"
import { AppContext } from "../../../context"
import { Button, Modal, Image } from "semantic-ui-react"

export function ArtModal(props) {
  const [context] = useContext(AppContext)

  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button fluid size="mini">More...</Button>}
      className={context.theme}
    >
      <Modal.Header>
        {props.data.title}
      </Modal.Header>
      <Modal.Content>
        <div className={`modal-art-grid ${context.theme}`}>
          <div>
            {props.data.primaryImage ? (
              <Image size="medium" src={props.data.primaryImage}/>
            ) : (
              <div>
                No Image
              </div>
            )}
          </div>
          <div className="modal-text">
            <div>
              <h3>
                {props.data.creditLine}
              </h3>
            </div>
            <div>
            {props.data.constituents && props.data.constituents.map((item, idx) => (
              <div key={idx}>
                <strong>
                  role: {item.role} name: {item.name}
                </strong>
              </div>
            ))}
            </div>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button className="project-btn" onClick={() => setOpen(false)}>Close</button>
      </Modal.Actions>
    </Modal>
  )
}
