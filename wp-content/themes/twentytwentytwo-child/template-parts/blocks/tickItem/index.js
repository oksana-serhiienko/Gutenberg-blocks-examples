const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { createElement: el } = wp.element;

const iconStyles = {
	width: "30px",
	height: "30px",
	borderRadius: "50%",
	backgroundColor: "#2ECC71",
	color: "#fff",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "18px",
	fontWeight: "bold",
};

const wrapperStyles = {
	display: "grid",
	gridTemplateColumns: "50px 1fr",
	gap: "10px",
	alignItems: "start",
};

registerBlockType("custom/tickitem", {
	edit() {
		return el(
			"div",
			{ style: wrapperStyles },
			[
				el(
					"div",
					{
						style: {
							display: "flex",
							justifyContent: "center",
						},
					},
					el("div", { style: iconStyles }, "✓")
				),
				el(
					"div",
					{},
					el(InnerBlocks, {
						allowedBlocks: [
							"core/paragraph",
							"core/heading",
							"core/list",
						],
					})
				),
			]
		);
	},

	save() {
		return el(
			"div",
			{ style: wrapperStyles },
			[
				el(
					"div",
					{
						style: {
							display: "flex",
							justifyContent: "center",
						},
					},
					el("div", { style: iconStyles }, "✓")
				),
				el(
					"div",
					{},
					el(InnerBlocks.Content)
				),
			]
		);
	},
});