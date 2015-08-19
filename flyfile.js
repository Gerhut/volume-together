export default async function () {
  await this.source(
    'node_modules/normalize.css/normalize.css',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-ui/dist')
}
