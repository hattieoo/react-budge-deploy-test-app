import React from 'react';
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({handleSubmit, handleCharge, charge, amount, edit, handleAmount}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <lable htmlFor="charge">지출 항목</lable>
                    <input 
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        value={charge}
                        placeholder='예) 렌트비'
                        onChange={handleCharge}
                    />
                </div>
                <div className='form-group'>
                    <lable htmlFor="amount">비용</lable>
                        <input 
                            type="number"
                            className="form-control"
                            id="amount"
                            name="amount"
                            value={amount}
                            placeholder='예) 100'
                            onChange={handleAmount}
                        />
                </div>
            </div>
            <button type="submit" className='btn'>
                {edit ? "수정" : "제출"} 
                <MdSend className='btn-icon'/>
            </button>
        </form>
    );
}

export default ExpenseForm;