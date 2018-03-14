import React from 'react';

const BreedSelect = ({ name, breeds, onChange }) => {
    return (
        <div className="gds-flex__item">
            <div className="gds-form-group">
                <label className="gds-form-group__label">Select a breed:</label>
                <select name={name} className="gds-form-group__select-input" onChange={onChange}>
                    <option value="">Select One</option>
                    {breeds.map(breed => <option key={breed}>{breed}</option>)}
                </select>
            </div>
        </div>
    );
};

export default BreedSelect;