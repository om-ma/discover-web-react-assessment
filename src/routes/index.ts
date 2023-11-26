import { Kyc } from "./../pages/kyc";
import { Authentication } from "./../pages/authentication";
import { ReviewAccountBalances } from "./../pages/review-account-balances";
import { NextSteps } from "./../pages/next-steps";
import { SubmissionClaimProof } from "./../pages/submission-claim-proof";
import { ConfirmEmail } from "./../pages/confirm-email";

/**
 * The above code defines a TypeScript type `TRoute` and an array of objects `routes` that conform to
 * this type.
 * @property {string} key - The key is a unique identifier for each route. It is used to differentiate
 * between different routes in the application.
 * @property component - The `component` property is a function that returns a JSX element. It is used
 * to render the component associated with the route.
 * @property {string} path - The `path` property is a string that represents the URL path for a
 * specific route. It is used to match the current URL path with the corresponding route in order to
 * render the correct component.
 */
export type TRoute = {
  key: string;
  component: () => JSX.Element;
  path: string;
};

export const auth = "authentication";
export const confirmEmail = "confirm-email";
export const kyc = "kyc";
export const wallet = "wallet";
export const krollPortal = "kroll-portal";
export const nextSteps = "next-steps";

const routes: TRoute[] = [
  {
    key: auth,
    component: Authentication,
    path: "/authentication",
  },
  {
    key: confirmEmail,
    component: ConfirmEmail,
    path: "/confirm-email",
  },
  {
    key: kyc,
    component: Kyc,
    path: "/redo-kyc",
  },
  {
    key: wallet,
    component: ReviewAccountBalances,
    path: "/wallet",
  },
  {
    key: krollPortal,
    component: SubmissionClaimProof,
    path: "/kroll-portal",
  },
  {
    key: nextSteps,
    component: NextSteps,
    path: "/next-steps",
  },
];

export default routes;
