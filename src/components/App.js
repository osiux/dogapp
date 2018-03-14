import React from "react";

import BreedSelect from "./BreedSelect";
import LoadingDots from "./LoadingDots";

const getUrl = url => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .catch(error => alert(error));
};

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breeds: [],
            breed1: "",
            breed2: "",
            breed3: "",
            loading: true
        };
    }

    componentDidMount() {
        this._getBreeds();
    }

    _getBreeds = () => {
        getUrl("https://dog.ceo/api/breeds/list").then(response => {
            this.setState({
                breeds: response.message,
                loading: false
            });
        });
    };

    _getImages = e => {
        e.preventDefault();
    };

    _handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { breeds, loading } = this.state;

        return (
            <div className="gds-layout__container">
                <div className="gds-layout__column--md-12 -p-t-5">
                    {loading && <LoadingDots />}
                    {loading || (
                        <form onSubmit={this._getImages}>
                            <div>
                                <div className="gds-flex -m-b-3">
                                    <BreedSelect
                                        name="breed1"
                                        breeds={breeds}
                                        onChange={this._handleChange}
                                    />
                                    <BreedSelect
                                        name="breed2"
                                        breeds={breeds}
                                        onChange={this._handleChange}
                                    />
                                    <BreedSelect
                                        name="breed3"
                                        breeds={breeds}
                                        onChange={this._handleChange}
                                    />
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
            </div>
        );
    }
}

export default App;
