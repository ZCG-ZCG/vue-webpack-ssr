
import '../assets/style/footer.styl'

export default {
  data () {
    return {
      author: 'ZCG'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written By {this.author}</span>
      </div>
    )
  }
}
