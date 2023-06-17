# Strapi Newsletter ✉️

## Introduction 📖

Strapi Newsletter is a plugin that makes it easy to send newsletters to your users when you publish a post.

## Installation ⏳

Run any of the following commands inside your strapi directory to install the plugin:

```
npm i @strapi-newsletter/strapi

yarn add @strapi-newsletter/strapi
```

## Usage 💄

You have two available providers to use, namely,

1. Mailchimp
2. ConvertKit
2. Mailgun

### Steps

1. You can use any of these providers to send newsletters. First of all you need to configure the provider that you're planning to use.

2. Go to your provider's website, create an account and get your API key and most probably also your list ID.

3. After you have installed your plugin, go to strapi settings and choose the `Strapi Newsletter` settings.

4. Then your users should register to your newsletter in-order for them to receive newsletter. To do this you can use the [following package](https://npmjs.com/package/@strapi-newsletter/react) provided by strapi-newsletter on the frontend. It's a simple and easy way to register to your newsletter OR you can send a POST request to the following endpoint with the email in the body of the POST request.

   `POST {YOUR_STRAPI_INSTANCE}/strapi-newsletter/newsletter/subscribe`

5. Now, you can either send a newsletter from the Strapi Newsletter tab in the main menu or the panel you're seeing when you're in a singular content type.

![Strapi Newsletter Admin](/images/strapi-newsletter-admin.png)

**OR**

![Strapi Newsletter Singular Content Type](/images/strapi-newsletter-singular.png)

When you're sending from a singular content type, you can map the newsletter fields such as subject and body to specific fields in the content type. For example you can map the `subject` field to the `title` field in the content type and the `body` field to the `content` field.

Here, you can choose whether is your body consist of Markdown. If it does, then make sure to tick the `Is Body Markdown` checkbox.
