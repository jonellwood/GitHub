const previewSecret = 'skcXLxnVxrf2m6BnCWLvbPNQq'
const projectUrl = 'http://localhost:3000'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
