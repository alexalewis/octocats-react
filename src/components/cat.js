import React from 'react'

class Cat extends React.Component {
  render() {
    return (
      <main>
        <ul class="images">
          <Cat>
            <section>
              <img src={this.props.imageUrl} alt={this.props.alt} />
            </section>
            <section>
              <p class="gray">{this.props.gray}</p>
              <p class="bold">{this.props.bold}</p>
            </section>
          </Cat>
        </ul>
      </main>
    )
  }
}

export default Cat
