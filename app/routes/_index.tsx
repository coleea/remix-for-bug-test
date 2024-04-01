import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, useActionData, useFetcher, useNavigation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  console.log("in action function");
  const formData = await request.formData();
  
  const file = formData.get('file')
  console.log({ file });

  // const errors = await validateRecipeFormData(formData);
  if (Math.random() > 0.9) {
    return json({ errors: "에러" });
  }

  return { status : 'success'}
  // const recipe = await db.recipes.create(formData);
  // return redirect(`/recipes/${recipe.id}`);
}

export default function Index() {
  
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  navigation;
  console.log({ actionData });  
  const fetcher = useFetcher();
  // const someAction = () => {};

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      1234
      <fetcher.Form method="post" encType="multipart/form-data" >
      {/* <fetcher.Form method="post"  > */}
        {/* <input type="text" /> */}
        <input type="file" name="file" />
        <button type="submit">Submit</button>
      </fetcher.Form>
      {JSON.stringify(actionData)}
      {/* <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul> */}
    </div>
  );
}
