import Form from 'react-bootstrap/Form';

function RadioBoxComp({ id, label, name, onChange }) {
    return (
        <Form>
            <div key={`default-${"radio"}`} className="mb-3">
                <Form.Check // prettier-ignore
                    type={"radio"}
                    id={`radio-${id}`}
                    label={label}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </Form>
    );
}

export default RadioBoxComp;