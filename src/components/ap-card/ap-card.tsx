import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ap-card',
  styleUrl: 'ap-card.css',
  shadow: true,
})
export class ApCard {
  @Prop() photo: string;

  @Prop() fullname: string;

  @Prop() role: string;

  render() {
    return (
      <div class="card">
        <img
          class="card__avatar"
          src={this.photo}
          alt="Avatar"
        />
        <div class="card__container">
          <h4><b>{this.fullname}</b></h4>
          <p>{this.role}</p>
        </div>
      </div>
    );
  }
}
