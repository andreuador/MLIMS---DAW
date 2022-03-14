<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="museums">
    <musuems>
        <xsl:apply-templates />
    </musuems>
</xsl:template>

<xsl:template match="museums">
    <musuems>
        <name><xsl:value-of select="name" /></name>
        <location>
            <xsl:attribute name="city">
                <xsl:value-of select="city" />
            </xsl:attribute>

            <xsl:attribute name="country">
                <xsl:value-of select="country" />
            </xsl:attribute>
        </location>
    </musuems>
</xsl:template>
</xsl:stylesheet>