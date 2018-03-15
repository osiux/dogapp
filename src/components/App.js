import React from "react";

import FormBreeds from './FormBreeds';

const getUrl = (url) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.message)
        })
        .catch(error => alert(error));
};

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [],
            breeds: [],
            breed1: '',
            breed2: '',
            breed3: '',
            loadingBreeds: true,
            loadingImages: false
        };
    }

    componentDidMount() {
        this._getBreeds();
    }

    _getBreeds = () => {
        getUrl("https://dog.ceo/api/breeds/list").then(response => {
            this.setState({
                breeds: response.message,
                loadingBreeds: false
            });
        });
    };

    _getImages = async () => {
        const { breed1, breed2, breed3 } = this.state;

        if (!breed1 || !breed2 || !breed3) {
            alert('You should select three breeds.');
            return false;
        }

        const image1 = await getUrl(`https://dog.ceo/api/breed/${breed1}/images/random`);
        const image2 = await getUrl(`https://dog.ceo/api/breed/${breed2}/images/random`);
        const image3 = await getUrl(`https://dog.ceo/api/breed/${breed3}/images/random`);

        return [image1.message, image2.message, image3.message];
    };

    _showImages = async e => {
        e.preventDefault();

        this.setState({
            loading: true,
            images: []
        });

        const images = await this._getImages();

        this.setState({
            loading: false,
            images
        });
    };

    _handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { images, breeds, loadingBreeds } = this.state;

        return (
            <div className="gds-layout__container">
                <FormBreeds
                    loading={loadingBreeds}
                    breeds={breeds}
                    onSubmit={this._showImages}
                    onChange={this._handleChange}
                />

                {
                    images.length > 0 && (
                        <div className="gds-layout__column--md-12 -p-t-5">
                            hi
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
