(function (blocks, element, blockEditor) {
	const { registerBlockType } = blocks;
	const { createElement: el } = element;
	const { useBlockProps } = blockEditor;

	registerBlockType('custom/propertysearch', {
		edit() {
			const blockProps = useBlockProps();

			return el(
				'div',
				{
					...blockProps,
					style: {
						padding: '20px',
						border: '1px solid #ddd',
						background: '#f5f5f5'
					}
				},
				'Property Search Widget'
			);
		},

		save() {
			return null;
		}
	});
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);