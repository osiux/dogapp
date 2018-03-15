import React from "react";

import LoadingDots from "./LoadingDots";
import BreedSelect from "./BreedSelect";

const FormBreeds = ({ loading, breeds, onChange, onSubmit }) => (
    <div className="gds-layout__column--md-12 -p-t-5">
        {loading && <LoadingDots />}
        {loading || (
            <form onSubmit={onSubmit}>
                <div>
                    <div className="gds-flex -m-b-3">
                        <BreedSelect name="breed1" breeds={breeds} onChange={onChange} />
                        <BreedSelect name="breed2" breeds={breeds} onChange={onChange} />
                        <BreedSelect name="breed3" breeds={breeds} onChange={onChange} />
                    </div>
                    <div className="gds-flex">
                        <div className="gds-flex__item">
                            <button className="gds-button gds-button--md gds-button--primary gds-button--block">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )}
    </div>
);

export default FormBreeds;
