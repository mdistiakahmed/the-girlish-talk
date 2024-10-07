import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, PlayIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    // Video block
    defineArrayMember({
      type: "object",
      name: "videoEmbed",
      title: "Video Embed",
      icon: PlayIcon, // Optional icon for the video block
      fields: [
        {
          name: "url",
          type: "url",
          title: "Video URL",
          description: "Enter the YouTube or Vimeo URL",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ["http", "https"],
            }).error("Please enter a valid URL"),
        },
        {
          name: "title",
          type: "string",
          title: "Video Title",
          description: "Add a title to describe the video",
        },
      ],
    }),
  ],
});
