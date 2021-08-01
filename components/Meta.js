import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                  rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/static/css/slick-theme.css"/>
            <link rel="stylesheet" href="/static/css/slick.css"/>
            <link rel="stylesheet" href="/static/css/custom.css"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'G_CARE',
    keywords: 'Hospital, Diagnostic, COVID 19',
    description: 'Get doorstep healthcare in chittagong',
}

export default Meta
