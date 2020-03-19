import React from 'react'

class cat extends React.Component {
  render() {
    return (
      <main>
        <ul>
          <cat>
            <section>
              <img
                class="images"
                src={this.props.imageUrl}
                alt={this.props.alt}
              />
            </section>
            <section>
              <p class="gray">{this.props.gray}</p>
              <p class="bold">{this.props.bold}</p>
            </section>
          </cat>
        </ul>
      </main>
    )
  }
}

export default cat
