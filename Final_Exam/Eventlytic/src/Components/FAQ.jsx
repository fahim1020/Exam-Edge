import React from "react";

export const FAQ = () => {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can I plan a birthday party using the app?
        </div>
        <div className="collapse-content">
          <p>
            To plan a birthday party, click on the "Create Event" button, select
            "Birthday," and fill in details like the date, time, venue, and
            guest list. You can also choose themes and send invitations directly
            from the app.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I customize my marriage ceremony event?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can fully customize your marriage ceremony event. From
            choosing the venue and decor to managing the guest list and catering
            options, our app allows you to tailor every aspect to your
            preferences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I invite guests to my events?
        </div>
        <div className="collapse-content">
          <p>
            You can invite guests by entering their email addresses or phone
            numbers in the "Invite Guests" section of your event. They will
            receive an invitation link to RSVP and view event details.
          </p>
        </div>
      </div>
    </>
  );
};
