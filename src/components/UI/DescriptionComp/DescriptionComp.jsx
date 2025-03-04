import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DescriptionComp(props) {
    const { label, placeholder, name, onChange } = props;
    return (


        <FloatingLabel controlId="floatingTextarea2" label={label}>
            <Form.Control
                as="textarea"
                placeholder={placeholder}
                style={{ height: '120px', marginBottom: '20px' }}
                name={name}
                onChange={onChange}
            />
        </FloatingLabel>

    );
}

export default DescriptionComp;