import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({ title, subject, description, time }) {
    return (
        <div className="emailRow">

            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <div className="emailRow__title">
                <h4>{title}</h4>
            </div>

            <div className="emailRow__message">
                <p>{subject}</p>
            </div>

            <div className="emailRow__description">

            </div>
        </div>
    )
}

export default EmailRow
