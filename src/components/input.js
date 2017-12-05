export function Input(props) {
    return (
        <input
            type="number"
            id={this.props.id}
            onChange={e => this.props.onChange(e.value)}
            value={this.props.value}
        />
    );
}
