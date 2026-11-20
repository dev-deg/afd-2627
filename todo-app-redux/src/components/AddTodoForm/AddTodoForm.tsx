import React, {useState} from 'react';
import type { AddTodoFormProps } from '../../types/todo';
import styles from './AddTodoForm.module.css'

const AddTodoForm: React.FC<AddTodoFormProps> = ({onAddTodo}) => {
    //Storing the text of the input box as its state defaulting to an empty string
    const [inputValue, setInputValue] = useState<string>(''); 
    const inputRef = React.useRef<HTMLInputElement>(null);

    //Function that is called when the submit button is pressed
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        //Prevents page reload
        e.preventDefault();
        //Checks contents of inputValue
        if (inputValue.trim()){
            //Adds todo item through onAddTodoCallback
            onAddTodo(inputValue);
            //Resets the input value to empty
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            ref={inputRef}
            className={styles.input} 
            type='text' 
            placeholder='Enter a new todo..' 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}>
            </input>

            <button className={styles.submitButton}type='submit'>Add</button>
        </form>
    );
}

export default AddTodoForm;