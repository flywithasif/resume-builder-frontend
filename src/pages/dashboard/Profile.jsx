import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <div className="mx-auto max-w-[900px]">
      <div>
        <p className="text-sm font-medium text-[#987542]">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
          Profile
        </h1>
      </div>

      <Card className="mt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="profile-name"
            label="Full name"
            placeholder="Your name"
          />

          <Input
            id="profile-email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
